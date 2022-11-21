//Funcion que me aplica el estilo a la opcion seleccionada y quita la previamente seleccionada
function seleccionar(link){
    var opciones = document.querySelectorAll('#links a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    link.className = "seleccionado";
    //hacemos desaparecer el menu una vez que se ha seleccionado una opcion en el modo responsive
    var x = document.getElementById("nav");
    x.className = "";
}

//Funcion que muestra el menu responsive
function responsiveMenu(){
    var x = document.getElementById("nav");
    if(x.className === ""){
        x.className = "responsive";
    }
    else{
        x.className = "";
    }
}

//Detecto el scrolling para activar las barras
window.onscroll = function(){
    efectoHabilidades()
};

//funcion que aplica la animacion
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        document.getElementById("java").classList.add("barra-progreso1");
        document.getElementById("python").classList.add("barra-progreso2");
        document.getElementById("poo").classList.add("barra-progreso3");
        document.getElementById("bd").classList.add("barra-progreso4");
        document.getElementById("html").classList.add("barra-progreso5");
        document.getElementById("js").classList.add("barra-progreso6");
        document.getElementById("c").classList.add("barra-progreso7");
    }
}

//funcion que manda el mail
const $form = document.querySelector('#form')
const $buttomMailto = document.querySelector('#trucazo')

$form.addEventListener('submit', handleSubmit)

function handleSubmit(event){
    event.preventDefault()
    const form = new FormData(this)
    $buttomMailto.setAttribute('href', `mailto:chianesevalentin@gmail.com?subject=Nombre: ${form.get('name')} Correo: ${form.get('email')} Asunto: ${form.get('theme')}&body=${form.get('message')}`)
    $buttomMailto.click()
}