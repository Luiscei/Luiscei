
 //Esta primera parte de JS es igual que el de HOME, sirve para desplegar el menú en versiones móviles
const botonBurguer = document.getElementById("hamburguesa");
const menu = document.getElementById("menu");
const botonCierre = document.getElementById("cierre");

botonBurguer.addEventListener("click", () => {

  if (window.innerWidth < 480) {
  menu.style.display = "block";
  menu.style.display = "flex";}
});


botonCierre.addEventListener("click", () => {
  menu.style.display = "none";
 
});
/* la funcion de aquí abajo se encarga de añadir un evento que llama a la carga de la página, (load)
y añadirle una función que hará que se añada una nueva clase con un nuevo estilo css a una class de mi css)
*/
window.addEventListener('load', function() {
  var mainPicture = document.querySelector('.mainpicture');
  mainPicture.classList.add('loaded');
});

