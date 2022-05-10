const { comprobarJWT } = require("../../helpers/jwt");
const { userConnect, userDisconnect, getUsers, saveMessage } = require("./socket.controller");

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

      const user = await userConnect(uid);

      console.log("cliente conectado ", user.name);

      // unir a una sal de chat soclet.io con userId
      socket.join(uid); // uniendo socket.io con userUID

      /* // Escuchar evento: mensaje-to-server
            socket.on('mensaje-to-server', ( data ) => {
                console.log( data );
                
                this.io.emit('mensaje-from-server', data );
            }); */

      // TODO: validate JWT
      // invalido => desconecatar
      // tOD: user active with uis

      // emit user conecteds
      this.io.emit("list-users", await getUsers());
      // TODO: socket join with uid

      // TODO: listen how client sent msg
      socket.on("message-personal", async (payload) => {
        const msg = await saveMessage(payload);
        this.io.to(payload.to).emit('message-personal', msg)
        this.io.to(payload.from).emit('message-personal', msg)
      });

      // TODO: user conecta or deisconect emit a BD

      // TODO: emit all users

      socket.on("disconnect", async () => {
        const user = await userDisconnect(uid);
        console.log("cliente desconectado ", user.name);
        // volver a emitir de todos los usuarios
        this.io.emit("list-users", await getUsers());
      });
    });
  }
}

module.exports = Sockets;
