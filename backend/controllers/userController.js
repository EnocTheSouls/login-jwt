const {
    obtenerTodosLosUsuarios,
    buscarPorId,
    actualizarUsuario,
    eliminarUsuario
} = require("../models/userModel");


// Obtener perfil del usuario autenticado
const obtenerPerfil = (req, res) => {

    res.json({
        mensaje: "Acceso permitido a perfil",
        usuario: req.usuario
    });

};


// Obtener todos los usuarios
const obtenerUsuarios = (req, res) => {

    obtenerTodosLosUsuarios((error, resultados) => {

        if (error) {

            console.log(error);

            return res.status(500).json({
                mensaje: "Error al obtener usuarios"
            });

        }

        res.json(resultados);

    });

};


// Obtener usuario por ID
const obtenerUsuarioPorId = (req, res) => {

    const { id } = req.params;


    buscarPorId(id, (error, resultados) => {

        if (error) {

            console.log(error);

            return res.status(500).json({
                mensaje: "Error al buscar usuario"
            });

        }


        if (resultados.length === 0) {

            return res.status(404).json({
                mensaje: "Usuario no encontrado"
            });

        }


        res.json(resultados[0]);

    });

};


// Actualizar usuario
const actualizarUsuarioController = (req, res) => {

    const { id } = req.params;

    const { nombre, correo } = req.body;


    if (!nombre || !correo) {

        return res.status(400).json({
            mensaje: "Nombre y correo son obligatorios"
        });

    }


    actualizarUsuario(
        id,
        nombre,
        correo,
        (error, resultado) => {

            if (error) {

                console.log(error);

                return res.status(500).json({
                    mensaje: "Error al actualizar usuario"
                });

            }


            res.json({
                mensaje: "Usuario actualizado correctamente"
            });

        }
    );

};


// Eliminar usuario
const eliminarUsuarioController = (req, res) => {

    const { id } = req.params;


    eliminarUsuario(id, (error, resultado) => {

        if (error) {

            console.log(error);

            return res.status(500).json({
                mensaje: "Error al eliminar usuario"
            });

        }


        res.json({
            mensaje: "Usuario eliminado correctamente"
        });

    });

};



module.exports = {

    obtenerPerfil,
    obtenerUsuarios,
    obtenerUsuarioPorId,
    actualizarUsuarioController,
    eliminarUsuarioController

};