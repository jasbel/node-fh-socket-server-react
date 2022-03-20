

class Sockets {

    constructor( io ) {

        this.io = io;

        this.socketEvents();
    }

    socketEvents() {
        // On connection
        this.io.on('connection', ( socket ) => {

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
            
        
        });
    }


}


module.exports = Sockets;