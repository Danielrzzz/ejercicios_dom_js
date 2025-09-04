//3.1
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
function createLists(array) { //cree esta función cuando vi que debía hacer algo parecido en el ejercicio 3.3, para facilitarlo en caso de necesitarlo otra vez
    
let ulList = document.createElement("ul");

for (let i = 0; i < array.length; i++) {
    let liElement = document.createElement("li");
    liElement.textContent = array[i];
    ulList.appendChild(liElement);
}
return ulList;
}

document.body.appendChild(createLists(countries));


//3.2
let elementToDelete = document.querySelector(".fn-remove-me");
elementToDelete.remove();


//3.3
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
let addElement = document.querySelector("[data-function='printHere']")
addElement.appendChild(createLists(cars));


//3.4
const countriesAgain = [ //le cambie el nombre a countriesAgain ya que el ejercicio 3.1 ya tenía el nombre countries
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

for (let country of countriesAgain) {         //con este código se eliminan los div nuevos del ejercicio 3.6, para ver los div individuales comento el ejercicio 3.4 o el 3.6
    let div = document.createElement("div");
    let h4 = document.createElement("h4");
    h4.textContent = country.title;
    let img = document.createElement("img");

    img.src = country.imgUrl;
    img.alt = country.title;

    div.appendChild(h4);
    div.appendChild(img);

    document.body.appendChild(div);
}

//3.5
    let button = document.createElement("button");
    button.textContent = "Delete last element";
    document.body.appendChild(button);
    button.addEventListener("click", () => {
    countriesAgain.pop();
    console.log(countriesAgain);
    let allDivs = document.querySelectorAll("div");
    let lastDiv = allDivs[allDivs.length - 1];
    if (lastDiv) {
      lastDiv.remove();
    }

    console.log(countriesAgain);
  });


//3.6
for (let country of countriesAgain) {  //he usado el mismo código que en el ejercicio anterior, pero agregando un botón al ser eliminado cada div (es lo que entendí del ejercicio)
    let div = document.createElement("div");
    let h4 = document.createElement("h4");
    h4.textContent = country.title;
    let img = document.createElement("img");

    img.src = country.imgUrl;
    img.alt = country.title;

    let dtBtn = document.createElement("button"); //creo un botón cada vez que elimino un div
    dtBtn.textContent = "Eliminar este elemento";

    dtBtn.addEventListener("click", () => {
        div.remove();
    });
    
    div.appendChild(h4);
    div.appendChild(img);
    div.appendChild(dtBtn);

    document.body.appendChild(div);
    }

  
