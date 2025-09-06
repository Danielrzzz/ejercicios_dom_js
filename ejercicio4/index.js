//4.1
let btnToClick = document.getElementById("btnToClick");
btnToClick.addEventListener("click", function(event) { // creo el evento que diga toda la información del evento(no estaba seguro de si esto es lo que se pedía)
  console.log("Event info: ", event);
});

//4.2
let focusInput = document.querySelector(".focus"); //no estaba seguro de si debía llamar a la variable "focus" por el nombre que da en el enunciado, pero me daba un error por ser el mismo nombre que la clase que estaba llamando, así que le cambie un poco el nombre
focusInput.addEventListener("focus", function() {
    console.log(focusInput.value);
});

//4.3
let inputInput = document.querySelector(".value"); //supuse que debía hacer algo igual que el ejercicio anterior, pero usando la clase "value" ya que es la unica que no he usado, el enunciado me confundió un poco ya que no sabía si tendría que usar el input de "focus" y que imprima lo mismo que "focus" o si usar el de "value", que no lo indica. Cualquier cosa lo corrijo
inputInput.addEventListener("input", function(){
    console.log(inputInput.value);
});

//4.4
const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];
let listUl = document.createElement("ul");
for(let i = 0;i < albums.length;i ++){
    let Element = document.createElement("li");
    Element.textContent = albums[i];
    listUl.appendChild(Element);
}
document.body.appendChild(listUl);