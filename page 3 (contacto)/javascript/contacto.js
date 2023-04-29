

//Este JS es igual que el de la página de HOME y RUTAS, comentado en ellos. Simplemente se usa para desplegar el menú móvil 
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