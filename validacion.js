let formularioContacto = document.querySelector("form");
let campoNombre = document.querySelector("#nombre");
let campoMail = document.getElementById("email");
let campoComentario = document.getElementById("comentario");
let listaConformidad = document.getElementById("calidad");
let notificaciones = document.querySelector("#notificaciones");
let botonEnviar = document.querySelector(".enviar");

formularioContacto.addEventListener('submit', (evento) => {
    evento.preventDefault();
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    let errores = [];
    if (campoNombre.value.length < 3){
        errores.push("Nombre muy corto!");
    }
    if(!regexEmail.test(email.value)){
        errores.push("\nEl email no es válido! ");
    }
    if (errores != ""){
        alert(errores);
    } else {
        alert("Formulario enviado!");
        campoNombre.value = "";
        campoMail.value = "";
        campoComentario.value = "";
        listaConformidad.value = "7";
        notificaciones.checked = false;       
    }
});