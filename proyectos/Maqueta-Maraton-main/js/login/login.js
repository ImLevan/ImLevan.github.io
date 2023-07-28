function login() {

    var correo = $("#input_correo").val();
    var password = $("#input_password").val();
    var expresion_mail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    var expresion_password = /^[a-z]\w{7,49}$/;
    var correoOK = expresion_mail.test(correo);
    var passwordOK = expresion_password.test(password);

    if (correo != "" && password != "" && correoOK && passwordOK) {
        localStorage.setItem("correo", correo);
        localStorage.setItem("logueado", true);

        $("#input_correo").val("");
        $("#input_password").val("");
        $("#sec_login").hide();
        $("#sec_loginExitoso").show();
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
