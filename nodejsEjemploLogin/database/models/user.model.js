const bcrypt = require('bcrypt');

users = {};

users.data = {};

users.generateHash = function(password, callback){
    bcrypt.hash(password, 10, callback);
}

users.comparePass = async function(password, hash){
    return await bcrypt.compare(password, hash);
}

users.register = function (username, password){
    //TODO Añadir comprobaciones sobre username y password
    if(users.data.hasOwnProperty(username)){
        throw new Error (`Ya existe el usuario ${username}.`);
    }
    users.generateHash(password, function(err, hash){
        if(err){
            throw new Error (`Error al generar el hash de ${username}.`);
        }
        users.data[username] = {username, hash, last_Login: new Date().toISOString}
    });
}

users.isLoginRight = async function(username,password){
    if(!users.data.hasOwnProperty(username)){
        return false;
    }
    return await users.comparePass(password, users.data[username].hash);
}

module.exports = users;