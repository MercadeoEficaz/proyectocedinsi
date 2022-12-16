console.log("Bienvenidos");

const nombre=document.getElementById("nombre")
document.getElementsByClassName(".nombre")
document.getElementsByTagName("input")

const email=document.getElementById("email")
document.getElementsByClassName(".email")
document.getElementsByTagName("email")

const telefono=document.getElementById("telefono")
document.getElementsByClassName(".telefono")
document.getElementsByTagName("telefono")

const nombre=document.getElementById("nombre")
document.getElementsByClassName(".nombre")
document.getElementsByTagName("input")

const email=document.getElementById("emailInicio")
document.getElementsByClassName(".emailInicio")
document.getElementsByTagName("emailInicio")

const telefono=document.getElementById("password")
document.getElementsByClassName(".password")
document.getElementsByTagName("password")


function validacion(campo){
    if(campo.value == "") {   
        alert(`${campo.name} está vacio`);
    } else{
        alert(campo.value)
    } 
}

/*
validacion(nombre);
validacion(email);
validacion(telefono);
*/

const mensajeDeError=document.getElementById("mensajeDeError")

function validacion(campo){
    if(campo.value ==""){    
        campo.classList.add(error)
    }
}

function enviar(){
    const nombre=document.getElementById("nombre")
    validate(nombre) 
    nombredelcampo.innerHTML = "<p>Mensaje de error</p>"
}

const nombreclase=document getElementById("nombre")
nombreClase.classList.add("error")

function iniciar(){
    const nombre=document.getElementById("emailInicio")
    validate(emailInicio) 
    nombredelcampo.innerHTML = "<p>Mensaje de error</p>"
}

const nombreclase=document getElementById("emailInicio")
nombreClase.classList.add("error")

