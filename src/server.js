const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../src/dataBase/config');
require('dotenv').config();
class Server {
    constructor() {
        this.app  = express();
        this.port = process.env.PORT;

        // Conectar a base de datos
        this.conectarDB();
        // Middlewares
        this.middlewares();
        // Rutas de mi aplicación
        this.routes();
    }
    async conectarDB() {
        await dbConnection();
    }
    middlewares() {
        // CORS
        this.app.use( cors() );
        // Lectura y parseo del body
        this.app.use( express.json() );
        // Directorio Público
        this.app.use( express.static('public') );
    }
    routes() {
        this.app.use( '/user', require('./user/usuarios.route'));
        this.app.use( '/', require('./pages/pages.route'));
    }
    listen() {
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en puerto', this.port );
        });
    }
}



const server = new Server();
const app=server.app;
server.listen();

module.exports=app;