Login JWT - Full Stack

Sistema de autenticación desarrollado con Node.js, Express, MySQL y JSON Web Tokens (JWT).

Descripción

Proyecto Full Stack de autenticación de usuarios que permite:

Registro de usuarios.
Inicio de sesión.
Encriptación de contraseñas con bcrypt.
Generación y validación de tokens JWT.
Protección de rutas mediante middleware.
Conexión con base de datos MySQL.
Tecnologías utilizadas
Backend
Node.js
Express.js
MySQL
mysql2
JWT (JSON Web Token)
bcrypt
dotenv
Herramientas
Git
GitHub
Visual Studio Code
Estructura del proyecto
login-jwt/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── package.json
│   └── index.js
│
├── frontend/
│
├── .gitignore
└── README.md
Instalación

Clonar el repositorio:

git clone https://github.com/EnocTheSouls/login-jwt.git

Entrar al backend:

cd backend

Instalar dependencias:

npm install

Crear archivo .env con las variables necesarias:

PORT=4000
DB_HOST=localhost
DB_USER=usuario_mysql
DB_PASSWORD=contraseña
DB_NAME=nombre_base_datos
JWT_SECRET=clave_secreta

Ejecutar servidor:

npm start
Endpoints principales
Autenticación
POST /registro
POST /login
Usuarios
GET /perfil
GET /usuarios
Próximas mejoras
Crear frontend con React.
Implementar manejo de sesiones.
Crear panel de usuario.
Mejorar validaciones.
Agregar diseño responsive.
Autor

Miguel Martínez
Desarrollor de Software