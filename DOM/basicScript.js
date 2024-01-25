console.log(`==========querySelector() API with id ==========`);
const elementLiFirst = document.querySelector("#firstRole");
console.log(elementLiFirst.innerHTML);

console.log(`==========querySelector() API with class ==========`);
const elementsRole = document.querySelector(".roles");
console.log(elementsRole.innerHTML);

console.log(`==========querySelectorAll() API with element name or Tag name ==========`);
const elementsP = document.querySelectorAll('p');
for (const element of elementsP) {
    console.log(element.innerHTML);
}

console.log(`==========querySelectorAll() API with element name or Tag name ==========`);
const elementsRoles = document.querySelectorAll('.roles');
for (const element of elementsRoles) {
    console.log(element.innerHTML);
}