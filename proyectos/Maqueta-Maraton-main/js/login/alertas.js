const nombre = document.getElementById("name")
const apellido = document.getElementById("last-name")
const edad = document.getElementById("edad")
const dni = document.getElementById("dni")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexstring = /^[a-zA-Z]+$/  
    if(!regexstring.test(nombre.value)){
        warnings += `El nombre no es valido <br>`
        entrar = true
    }
    if(!regexstring.test(apellido.value)){
        warnings += `El apellido no es valido <br>`
        entrar = true
    }
    if(edad.value < 1){
        warnings += `La edad no es valida <br>`
        entrar = true
    }
    if(dni.value.length < 7 || dni.value.length > 8){
        warnings += `El dni no es valido <br>`
        entrar= true
    }

    if(entrar){
        parrafo.innerHTML = warnings
        parrafo.style.color="#c91e1e"
    }
    else{
        parrafo.innerHTML = "Enviado"
        nombre.innerHTML = ""
        apellido.innerHTML = ""
        edad.innerHTML = ""
        dni.innerHTML = ""
        parrafo.style.color="green"
    }
})
