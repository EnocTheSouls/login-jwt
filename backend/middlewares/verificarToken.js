require("dotenv").config();

const jwt = require("jsonwebtoken");

function verificarToken(req, res, next) {
    
    const authHeader = req.headers["authorization"];
    console.log("Entró al middleware");
    if (!authHeader) {

        return res.status(401).json({
            mensaje: "No existe token"
        });

    }


    const token = authHeader.split(" ")[1];


    if (!token) {

        return res.status(401).json({
            mensaje: "Token corrupto"
        });

    }


    try {

        const decoded = jwt.verify(
            token,
            process.env.SECRET_KEY
        );

        req.usuario = decoded;

        next();


    } catch (error) {

        return res.status(401).json({
            mensaje: "Token inválido"
        });

    }

}


module.exports = verificarToken;