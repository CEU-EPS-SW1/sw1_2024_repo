const socket = io();

const form = document.getElementById('form');
const input = document.getElementById('input');
const messages = document.getElementById('messages');

form.addEventListener('submit', (e)=> {
    e.preventDefault();
    if(input.value){
        socket.emit('chat', input.value);
        input.value = '';
    }
});