
//Efecto cambio de color del boton de código cuando se ingresa un valor en el input

const input = document.querySelector('.input');
const button = document.querySelector('.Subscribe-btn');

input.addEventListener('input', () => {
    if (input.value.trim() !== "") {
        button.style.backgroundColor = '#029EDC';
        button.style.color = '#fff';
    } else {
        button.style.backgroundColor = '';
        button.style.color = '';
    }
});