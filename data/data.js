/* eslint-disable prettier/prettier */
const users = [];

export function saveUser(id, name , username, pass) {
    const user = {
        id: id,
        name: name,
        user: username,
        pass: pass,
    };
    users.push(user);
}

export function searchUser(usuario, pass){
    const User = users.find(user => user.user === usuario && user.pass === pass);
    if (User) {
        return true;
    } else {
        return false;
    }
}

export const hours = [];

export function saveHour(date, time,time2,calc) {
    const register = {
        date:date,
        hStart:time,
        hEnd:time2,
        total: calc,
    };
    hours.push(register);
}
