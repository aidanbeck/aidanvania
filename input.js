document.addEventListener('keydown', input);
document.addEventListener('keydown', inputOff);

let binds = [];

function input(event) {
    let bind = binds[event.key];
    bind.function();
    bind.on = true;
}

function inputOff(event) {
    let bind = binds[event.key];
    bind.on = false;
}

function bind(key, func) {
    binds[key] = {function: func, on: false };
}