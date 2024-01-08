const fruits_seasonal=["Banana","Orange","Apple","Mango","Water Melon"];
let f=fruits_seasonal[0];
let l=fruits_seasonal[fruits_seasonal.length-1];
console.log(`First element = ${f} last element = ${l}`);
fruits_seasonal.unshift("Papaya");
console.log(fruits_seasonal);
var aa = fruits_seasonal.splice(4,1);
console.log(`Remove mango from array = ${aa}`);
console.log(fruits_seasonal);
fruits_seasonal.push('Pineapple');
console.log(fruits_seasonal);
fruits_seasonal.splice(4,0,'Dragon Fruits')
console.log(fruits_seasonal);
fruits_seasonal.splice(2, 1, 'Kiwi' )
console.log(fruits_seasonal);
const elementsMiddle = fruits_seasonal.slice(1, 6);
console.log(elementsMiddle);
console.log("Last 3 elements=");
for (let index = 4; index < fruits_seasonal.length; index++) {
    const element = fruits_seasonal[index];
    console.log(element);
    
}

