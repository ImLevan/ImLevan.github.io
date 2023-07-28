function iniciar() {
    var password = $("#input_password").val();
    var expresion_password = /^[a-z]\w{7,49}$/;
    var passwordOK = expresion_password.test(password);

    if (password != "" && passwordOK) {
        $("#input_password").val("");
        $("#input_id").val("");
        alert("Inicio de secion correcto.");
        window.location.href = "../HTML/index.html";
    }else{
        if(!passwordOK){
            alert("Por favor introduzca una contraseña válida (Entre 8 y 50 caracteres)");
        }
        else{
            alert("Por favor introduzca todos los campos");
        } 
    }
}

function registrar() {
    var correo = $("#input_email").val();
    var password = $("#input_password2").val();
    var expresion_mail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    var expresion_password = /^[a-z]\w{7,49}$/;
    var correoOK = expresion_mail.test(correo);
    var passwordOK = expresion_password.test(password);

    if (correo != "" && password != "" && correoOK && passwordOK) {
        $("#input_email").val("");
        $("#input_password2").val("");
        $("#input_id2").val("");
        window.location.href = "../HTML/index.html";
    }else{
        if(!correoOK){
            alert("Por favor introduzca un mail válido (name@example.com)");
        }else if(!passwordOK){
            alert("Por favor introduzca una contraseña válida (Entre 8 y 50 caracteres)");
        }
        else{
            alert("Por favor introduzca todos los campos");
        } 
    }
}
