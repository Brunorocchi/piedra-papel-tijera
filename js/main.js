let puntosUsuario = 0;
let puntosPC = 0;

let instrucciones = document.querySelector("#instrucciones");
let contenedorPuntosUsuario = document.querySelector("#puntos-usuarios");
let contenedorPuntosPC = document.querySelector("#puntos-computadora");
let mensaje = document.querySelector("#mensaje");
let contenedorGanaPunto = document.querySelector("#gana-punto");
let reiniciar = document.querySelector("#reiniciar");
let elegiTuArma = document.querySelector("#elegi-tu-arma");

let contenedorEleccionUsuario = document.querySelector("#eleccion-usuario");
let contenedorEleccionPC = document.querySelector("#eleccion-computadora");

let botonesArmas = document.querySelectorAll(".arma");

botonesArmas.forEach(boton => {
    boton.addEventListener("click", iniciarTurno);
});

function iniciarTurno(e) {
    let eleccionPC = Math.floor(Math.random()*3);
    let eleccionUsuario = e.currentTarget.id;

    // piedra => 0
    // papel => 1
    // tijera => 2

    if (eleccionPC === 0) {
        eleccionPC = "piedra🪨"
    } else if (eleccionPC === 1) {
        eleccionPC = "papel✉️"
    } else {
        eleccionPC = "tijera✂️"
    };
    


    // piedra vence a tijera
    // tijera vence a papel
    // papel vence a piedra
    // si son iguales es empate

    if (
        (eleccionUsuario === "piedra🪨" && eleccionPC === "tijera✂️") ||
        (eleccionUsuario === "tijera✂️" && eleccionPC === "papel✉️") ||
        (eleccionUsuario === "papel✉️" && eleccionPC === "piedra🪨")
    ) {
        ganaUsuario();
    } else if (
        (eleccionPC === "piedra🪨" && eleccionUsuario === "tijera✂️") ||
        (eleccionPC === "tijera✂️" && eleccionUsuario === "papel✉️") ||
        (eleccionPC === "papel✉️" && eleccionUsuario === "piedra🪨")
    ) {
        ganaPC();
    } else {
        empate();
    }
    
    mensaje.classList.remove("disabled");
    contenedorEleccionPC.innerText = eleccionPC;
    contenedorEleccionUsuario.innerText = eleccionUsuario;

    if (puntosUsuario === 5 || puntosPC === 5) {
        if (puntosUsuario == 5) {
            instrucciones.innerText = "❤️ Ganaste el juego! ❤️"
        }
        if (puntosPC === 5) {
            instrucciones.innerText = "😒 Gano la PC! 😒"
        }
        elegiTuArma.classList.add("disabled");
        reiniciar.classList.remove("disabled");
        mensaje.classList.add("disabled");
        reiniciar.addEventListener("click", reiniciarJuego);
    } 

}

function ganaUsuario() {
    puntosUsuario++;
    contenedorPuntosUsuario.innerText = puntosUsuario;
    contenedorGanaPunto.innerText = "Ganaste un Punto! ❤️";
}

function ganaPC() {
    puntosPC++;
    contenedorPuntosPC.innerText = puntosPC;
    contenedorGanaPunto.innerText = "Gano un punto la Computadora! 😒";
}

function empate() {
    contenedorGanaPunto.innerText = "esto es un EMPATE! 🤐";
}

function reiniciarJuego() {
    reiniciar.classList.add("disabled");
    elegiTuArma.classList.remove("disabled");
    puntosUsuario = 0;
    puntosPC = 0;
    contenedorPuntosPC.innerText = puntosPC;
    contenedorPuntosUsuario.innerText = puntosUsuario;
    instrucciones.innerText = "El primero en llegar a 5 puntos gana.";
}
