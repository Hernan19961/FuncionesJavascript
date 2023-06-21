color = ''

const fullColor = (id) => {
    const element = document.getElementById(id)
    element.style.background = color
}

const opcionElegida = document.querySelector('#opcionElegida')

document.addEventListener('keydown', function (event) {
    // console.log(event.key)
    // console.log(color)

    if (event.key === 'a' || event.key === 'A') {
        color = 'red'
        opcionElegida.innerHTML = "Elegiste el color rojo"
    } else if (event.key === 's' || event.key === 'S') {
        color = 'black'
        opcionElegida.innerHTML = 'Elegiste el color negro'
    } else if (event.key === 'd' || event.key === 'D') {
        color = 'blue'
        opcionElegida.innerHTML = 'Elegiste el color azul'
    } else {
        opcionElegida.style.color = 'red'
        opcionElegida.innerHTML = 'Opcion Incorrecta'
    }
})