require("dotenv").config();
const express = require("express");
const conexion = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();

const PORT = 4000;


app.use(express.json());


// rutas de autenticación
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);


// ruta principal
app.get("/", (req,res)=>{

    res.send("Servidor Login JWT funcionando 🚀");

});


app.listen(PORT,()=>{

    console.log(`Servidor iniciado en http://localhost:${PORT}`);

});