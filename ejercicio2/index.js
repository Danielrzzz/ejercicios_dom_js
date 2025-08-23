//2.1
let newDiv = document.createElement("div");
document.body.appendChild(newDiv);

//2.2
let secondDiv = document.createElement("div");
let newText = document.createElement("p");  //no le he puesto contenido al p ya que no lo pedía, pero lo deje como comentario
// newText.textContent = "Hola";
secondDiv.appendChild(newText);
document.body.appendChild(secondDiv);

//2.3
function addParagraphs(element, paragraph, number) {  //intenté que la función sea reutilizable para añadir texto a un elemento una indeterminada cantidad de veces
    for (let i = 0; i < number; i++) {
        let newParagraph = document.createElement("p");
        newParagraph.textContent = paragraph;
        element.appendChild(newParagraph);
    }
    return element;
}

let thirdDiv = document.createElement("div");
addParagraphs(thirdDiv, "Holaa", 6);
document.body.appendChild(thirdDiv);

//2.4
let secondText = document.createElement("p");
secondText.textContent = "Soy dinámico!";
document.body.appendChild(secondText);

//2.5
let secondTitle = document.querySelector(".fn-insert-here");
secondTitle.textContent = "Wubba Lubba dub dub"; 

//2.6
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
let ulList = document.createElement("ul");
for (let i = 0; i < apps.length; i++) {
    let liElement = document.createElement("li");
    liElement.textContent = apps[i];
    ulList.appendChild(liElement);
}
document.body.appendChild(ulList);


//2.7
let deleteElements = document.querySelectorAll(".fn-remove-me");
for (let i = 0; i < deleteElements.length; i++) {
    deleteElements[i].remove();
}

//2.8
