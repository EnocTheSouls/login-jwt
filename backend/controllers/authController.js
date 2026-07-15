require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const {
    crearUsuario,
    buscarPorCorreo
} = require("../models/userModel");


// Registrar usuario
const registrarUsuario = async (req, res) => {

    const { nombre, correo, password } = req.body;

    if (!nombre || !correo || !password) {

        return res.status(400).json({
            mensaje: "Todos los campos son obligatorios"
        });

    }
    // Validar formato del correo
    const expresionCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!expresionCorreo.test(correo)) {

        return res.status(400).json({
            mensaje: "El correo no tiene un formato válido"
        });

    }

    try {

        buscarPorCorreo(correo, async (error, resultados) => {

            if (error) {

                console.log(error);

                return res.status(500).json({
                    mensaje: "Error al verificar el correo"
                });

            }

            if (resultados.length > 0) {

                return res.status(409).json({
                    mensaje: "El correo ya está registrado"
                });

            }

            const passwordHash = await bcrypt.hash(password, 10);

            crearUsuario(
                nombre,
                correo,
                passwordHash,
                (error, resultado) => {

                    if (error) {

                        console.log(error);

                        return res.status(500).json({
                            mensaje: "Error al registrar usuario"
                        });

                    }

                    res.status(201).json({

                        success: true,

                        message: "Usuario registrado correctamente",

                        data: {

                            id: resultado.insertId,
                            nombre,
                            correo

                        }

                    });

                }
            );

        });

    } catch (error) {

        res.status(500).json({
            mensaje: "Error del servidor"
        });

    }

};


// Iniciar sesión
const iniciarSesion = async (req, res) => {

    const { correo, password } = req.body;

    try {

        buscarPorCorreo(correo, async (error, resultados) => {

            if (error) {

                console.log(error);

                return res.status(500).json({
                    mensaje: "Error en la base de datos"
                });

            }

            if (resultados.length === 0) {

                return res.status(400).json({
                    mensaje: "Correo o contraseña incorrectos"
                });

            }

            const usuario = resultados[0];

            const passwordValida = await bcrypt.compare(
                password,
                usuario.password
            );

            if (!passwordValida) {

                return res.status(401).json({
                    mensaje: "Correo o contraseña incorrectos"
                });

            }

            const token = jwt.sign(
                {
                    id: usuario.id,
                    correo: usuario.correo
                },
                process.env.SECRET_KEY,
                {
                    expiresIn: "1h"
                }
            );
            res.status(200).json({

                success: true,

                message: "Inicio de sesión exitoso",

                data: {

                    token,

                    usuario: {
                        id: usuario.id,
                        nombre: usuario.nombre,
                        correo: usuario.correo
                    }

                }

            });

        });

    } catch (error) {

        res.status(500).json({
            mensaje: "Error del servidor"
        });

    }

};


// Exportar funciones
module.exports = {
    registrarUsuario,
    iniciarSesion
};