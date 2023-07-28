const displayValorActual = document.getElementById('valor-actual');
const displayValorAnterior = document.getElementById('valor-anterior');
const botonNumeros = document.querySelectorAll('.numero');
const botonOperadores = document.querySelectorAll('.operador');
const bdark = document.querySelector('#bdark');
const body = document.querySelector('body');

const display = new Display(displayValorAnterior, displayValorActual);

botonNumeros.forEach(boton => {
    boton.addEventListener('click', () =>{
        display.agregarNumero(boton.innerHTML);
    })
})

botonOperadores.forEach(boton => {
    boton.addEventListener('click', () => display.computar(boton.value));
})


load();

bdark.addEventListener('click', e =>{
    body.classList.toggle('darkmode');
    store(body.classList.contains('darkmode'));
    bdark.classList.toggle('active');
});

function load(){
    const darkmode = localStorage.getItem('darkmode');
    const bdarkmode = localStorage.getItem('active');

    if(!darkmode || !bdarkmode){
        store('false');
    }else if(darkmode == 'true' || bdarkmode == 'true'){
        body.classList.add('darkmode');
        bdark.classList.add('active');
    }
}

function store(value){
    localStorage.setItem('darkmode', value);
    localStorage.setItem('active', value);
}