//3.1
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
let ulList = document.createElement("ul");
for (let i = 0; i < countries.length; i++) {
    let liElement = document.createElement("li");
    liElement.textContent = countries[i];
    ulList.appendChild(liElement);
}
document.body.appendChild(ulList);


//3.2
let elementToDelete = document.querySelector(".fn-remove-me");
elementToDelete.remove();