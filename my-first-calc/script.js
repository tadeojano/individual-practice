const sum = document.querySelector('#suma')
const restar = document.querySelector('#restar')
const multi = document.querySelector('#multi')
const divi = document.querySelector('#divi')
const val1 = document.querySelector('#val1')
const val2 = document.querySelector('#val2')
const texto = document.querySelector('.texto')
const btn = document.querySelector('.botonCalcular')

btn.addEventListener('click', calculo);


function calculo() {
    let valor1 = Number(val1.value);
    let valor2 = Number(val2.value);
    let resultado;
    if (sum.checked) {
        resultado = valor1 + valor2
    }
    else if (restar.checked) {
        resultado = valor1 - valor2
    }
    else if (multi.checked) {
        resultado = valor1 * valor2
    }
    else if (divi.checked) {
        resultado = valor1 / valor2
    }
    else {
        texto.innerHTML = 'Debes seleccionar que operacion haras';
        texto.style.color = "red";
        return;
    }

    if (isNaN(resultado)) {
        texto.innerHTML = 'Debes ingresar números válidos en ambos campos';
        texto.style.color = "red";
        return;
    }
    
    if (val1.value.length <= 0 || val2.value.length <= 0) {
        texto.innerHTML = 'Debes ingresar numeros en ambos campos';
        texto.style.color = "red";
        return;
    }

    texto.style.color = "white";
    texto.innerHTML = 'El resultado es: ' + resultado;
}