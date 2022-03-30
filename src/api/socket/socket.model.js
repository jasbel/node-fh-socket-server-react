const { comprobarJWT } = require("../../helpers/jwt");
const { userConnect, userDisconnect } = require("./socket.controller");

class Sockets {
  constructor(io) {
    this.io = io;

    this.socketEvents();
  }

  socketEvents() {
    // On connection
    this.io.on("connection", async (socket) => {
      const [validate, uid] = comprobarJWT(socket.handshake.query["x-token-socket"]);
      if (!validate) {
        console.log("Socekt no identificado");
        return socket.disconnect();
      }

      const user = await userConnect(uid)

      console.log("cliente conectado ", user.name);

      /* // Escuchar evento: mensaje-to-server
            socket.on('mensaje-to-server', ( data ) => {
                console.log( data );
                
                this.io.emit('mensaje-from-server', data );
            }); */

      // TODO: validate JWT
      // invalido => desconecatar
      // tOD: user active with uis

      // emit user conecteds
      // TODO: socket join with uid

      // TODO: eschua cliente when sen messafe
      // TODO: user conecta or deisconect emit a BD
      // TODO: emit all users

      socket.on("disconnect", async () => {
        const user = await userDisconnect(uid)
        console.log("cliente desconectado ", user.name);
      });
    });
  }
}

module.exports = Sockets;
