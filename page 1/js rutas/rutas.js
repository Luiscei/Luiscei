
 
const botonBurguer = document.getElementById("hamburguesa"); //Aquí llamo a un div de mi HTML llamado "hamburguesa"
const menu = document.getElementById("menu"); //Aquí llamo a otro div de mi HTML llamado "menu"
const botonCierre = document.getElementById("cierre"); //Y por último aquí llamo a otro div de  mi menú llamado cierre

botonBurguer.addEventListener("click", () => {
//con esta función le digo que cuando el ancho de la pantalla se inferior a 480, me amuestre el menú para móviles
  if (window.innerWidth < 480) {
  menu.style.display = "block";
  menu.style.display = "flex";}
});


botonCierre.addEventListener("click", () => {
  menu.style.display = "none"; //Y con esta función le digo que cuando se aprete el botón de cierre, el menú se esconda
 
});

/*Estas funciones de las di porue edite unos botones en HTML a los que se me olvidó ponerles un <a> patra enlazarlos,
así que los enlace mediante JS*/

const elBoton = document.getElementById('botonsecretos');
  //Esta función hace que al hacer click en un botón, redireccione a una página
  elBoton.addEventListener('click', () => {
 
    window.location.href ="../page 3 (contacto)/contacto.html";
  });


  const elBotondos = document.getElementById('botonsecretos2');
    //Esta función hace lo mismo que el botón anterior
  elBotondos.addEventListener('click', () => {
 
    window.location.href ="../page 2 (trips)/trips.html";
  });