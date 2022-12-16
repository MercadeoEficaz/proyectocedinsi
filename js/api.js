const imagenRicky =document.getElementById("imagenRicky");
const nombrePersonaje = document.getElementById("nombre");

function llamarAp(){
    fetch('https://rickandmortyapi.com/api/character/1')
    .then(response => response.json())
    .then(funtion(data){
        console.log(data)
        imagenRicky.setAttribute('src'. data.image);
        nombrePersonaje.innerHTML =data.name
    })
}

    
    
    
    /*
    (function(){
        Response.json();
    })



    .then(function(res){
        console.log(res)
    })
}
*/