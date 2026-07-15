const express = require("express");

const router = express.Router();

const verificarToken = require("../middlewares/verificarToken");

const {
    obtenerPerfil,
    obtenerUsuarios,
    obtenerUsuarioPorId,
    actualizarUsuarioController,
    eliminarUsuarioController
} = require("../controllers/userController");

// Rutas protegidas
router.get("/perfil", verificarToken, obtenerPerfil);

router.get("/usuarios", verificarToken, obtenerUsuarios);

router.get("/usuarios/:id", verificarToken, obtenerUsuarioPorId);

router.put("/usuarios/:id", verificarToken, actualizarUsuarioController);

router.delete("/usuarios/:id", verificarToken, eliminarUsuarioController);

module.exports = router;