var socket = io();

socket.on('connect', () => {
    console.log('connected');

    socket.emit('createMessage', {
        from: 'Serginho Malandro 2',
        text: 'mas que beleza hein!'
    });
});

socket.on('disconnect', () => {
    console.log('Discconnected');
});

socket.on('newMessage', function (message) {
    console.log('New message', message);
});