const database = {};

database.user = require('./models/user.model');

function initializeUsers(){
    const NAMES = ["alberto", "ana", "daniel", "silvia"];
    NAMES.forEach(function(username){
        database.user.register(username, "1234");
    });
}

function initializeDB(){
    initializeUsers();
}

initializeDB();

module.exports = database;