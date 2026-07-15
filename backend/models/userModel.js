const conexion = require("../config/db");


// Crear usuario
const crearUsuario = (nombre, correo, passwordHash, callback) => {

    const sql = `
        INSERT INTO usuarios
        (nombre, correo, password)
        VALUES (?, ?, ?)
    `;

    conexion.query(
        sql,
        [nombre, correo, passwordHash],
        callback
    );

};


// Buscar por correo
const buscarPorCorreo = (correo, callback) => {

    const sql = "SELECT * FROM usuarios WHERE correo = ?";

    conexion.query(
        sql,
        [correo],
        callback
    );

};


// Obtener todos
const obtenerTodosLosUsuarios = (callback) => {

    const sql = `
        SELECT
            id,
            nombre,
            correo,
            fecha_registro
        FROM usuarios
    `;

    conexion.query(sql, callback);

};


// NUEVA FUNCIÓN 4
// Buscar usuario por ID
const buscarPorId = (id, callback) => {

    const sql = `
        SELECT
            id,
            nombre,
            correo,
            fecha_registro
        FROM usuarios
        WHERE id = ?
    `;

    conexion.query(
        sql,
        [id],
        callback
    );

};


// NUEVA FUNCIÓN 5
// Actualizar usuario
const actualizarUsuario = (id, nombre, correo, callback) => {

    const sql = `
        UPDATE usuarios
        SET nombre = ?, correo = ?
        WHERE id = ?
    `;

    conexion.query(
        sql,
        [nombre, correo, id],
        callback
    );

};


// NUEVA FUNCIÓN 6
// Eliminar usuario
const eliminarUsuario = (id, callback) => {

    const sql = `
        DELETE FROM usuarios
        WHERE id = ?
    `;

    conexion.query(
        sql,
        [id],
        callback
    );

};


module.exports = {

    crearUsuario,
    buscarPorCorreo,
    obtenerTodosLosUsuarios,
    buscarPorId,
    actualizarUsuario,
    eliminarUsuario

};