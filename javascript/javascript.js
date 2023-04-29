var respuesta = document.getElementById("pregunta") //aquí llamamos al div con el ID de "pregunta" y creamos una variable

var boton = document.getElementById("boton")//aquí llamamos al div con el ID de "botón" y creamos una variable

var pringado = document.getElementById("sorry")//aquí llamamos al div con el ID de "sorry" y creamos una variable

var enlaceUno = document.getElementById("enlace1")//aquí llamamos al div con el ID de "enlace1" y creamos una variable





boton.addEventListener("click",function(){ //aquí le agregamos un evento a la variable boton, para que al hacer click, se ejecute esta función:

    if(respuesta.value < 18){ /*Aquí le decimos que si el valor de la respuesta en el input es de menos de 18, muestre
    un div que esta oculto con la propiedad css "flex"*/

        pringado.style.display = "flex";
    }

   if(respuesta.value === ""){ //Aquí le decimos que si el usuario deja vacio el input al darle al botón de acceder, le responda que conteste
    respuesta.value = "¿Quieres hacer el favor de decir tu edad?";
    pringado.style.display = "none";} //... pero que de momento no muestre este div todavía

    if(respuesta.value >= 18){ /*Con este if le decimos que si la respuesta en el input de la edad es mayor o igual que 18 desactive 
    el div que se mostraba cuando tenías menos de la edad requerida*/

        
        pringado.style.display = "none";
        window.location.href === ''
       
    }

   
})







enlaceUno.addEventListener("click",function(){

    if(respuesta.value >= 18){//Aquí le decimos que si el valor de la respuesta es mayor o igual que 18 ejecute la propiedad siguiente
        window.location.href = "page 1/rutas.html"; //esta propiedad hace que el enlace se active
      
        }
        
        else {
            event.preventDefault(); // esta propieda hace que el enlace no se active

        }

  
       
    })



















