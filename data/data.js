/* eslint-disable prettier/prettier */
const users = [];

export function saveUser(id, nombre, usuario, pass) {
    const user = {
    id: id,
    name: nombre,
    user: usuario,
    pass: pass,
    };
    users.push(user);
}

export function buscaUser(usuario, pass){
    const User = users.find(user => user.user === usuario && user.pass === pass);
    if (User) {
        return true;
    } else {
        return false;
    }
}

export const horas = [];

export function GHora(date, time,time2,total) {
    const registro = {
        fecha:date,
        horai:time,
        horaf:time2,
        total: total,
    };
    horas.push(registro);
    console.log(registro.fecha);
}


