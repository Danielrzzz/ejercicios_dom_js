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

