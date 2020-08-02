// Comando para establecer la conexión activa al servidor

const socket = io();

let label = $('#lblNuevoTicket');

socket.on('connect', () => {

    
});

socket.on('estadoActual', function (resp) {
    label.text(resp.actual);
});

socket.on('disconnect', () => {
});

$('button').on('click', (e) => {

    socket.emit('siguienteTicket', null, function (siguienteTicket) {
        label.text(siguienteTicket);
    });

});

