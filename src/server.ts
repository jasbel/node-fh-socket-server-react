// Servidor de Express
const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const path = require('path');
const cors = require('cors');
import authRoutes from './api/auth/auth.routes';
import messageRoutes from './api/message/message.routes';

import Sockets from './api/socket/socket.model';
const { dbConnection } = require('./database/config');

class Server {
  app: any;
  port: string | undefined;
  server: any;
  io: any;
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    // Conectar a DB
    dbConnection();

    // Http server
    this.server = http.createServer(this.app);

    // Configuraciones de sockets
    this.io = socketio(this.server, {
      /* configuraciones */
    });
  }

  middlewares() {
    // Desplegar el directorio público
    this.app.use(express.static(path.resolve(__dirname, '../public')));

    //CORS
    this.app.use(cors());

    this.app.use(express.json());
    this.app.use('/api/login', authRoutes);
    this.app.use('/api/messages', messageRoutes);
  }

  // Esta configuración se puede tener aquí o como propieda de clase
  // depende mucho de lo que necesites
  configurarSockets() {
    new Sockets(this.io);
  }

  execute() {
    // Inicializar Middlewares
    this.middlewares();

    // Inicializar sockets
    this.configurarSockets();

    // Inicializar Server
    this.server.listen(this.port, () => {
      console.info('Server running on port: ', this.port);
    });
  }
}

export default Server;
