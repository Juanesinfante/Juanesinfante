function iniciarJuego() {
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
}

function seleccionarMascotaJugador() {

    let spanMascotaJugador = document.getElementById("mascota-jugador")

    if (document.getElementById("hipodoge").checked == true) {
        spanMascotaJugador.innerHTML = "Hipodoge"
    } else if (document.getElementById("capipepo").checked == true) {
        spanMascotaJugador.innerHTML = "Capipepo"
    } else if (document.getElementById("ratigueya").checked == true) {
        spanMascotaJugador.innerHTML = "Ratigueya"
    } else {
        alert("No has elegido tu Mascota")
    }

    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo() {

    let ataqueAleatorio = aleatorio(1, 3)
    let spanMascotaEnemigo = document.getElementById("mascota-enemigo")

    if (ataqueAleatorio == 1) {
        spanMascotaEnemigo.innerHTML = "Hipodoge"
    } else if (ataqueAleatorio == 2) {
        spanMascotaEnemigo.innerHTML = "Capipepo"
    } else {
        spanMascotaEnemigo.innerHTML = "Ratigueya"
    }
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', iniciarJuego)