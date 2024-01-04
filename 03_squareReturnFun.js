//Function with arguments With return value
function square1(n1){
console.log(`Numbers is = ${n1}`);
var result=n1*n1;
return result;
console.log(78); //Not executed these lines after return statements
}
var result=square1(4);
console.log(`result or output= ${result}`);
var result=square1(9);
console.log(result);
// Function with no arguments and No Reurn value 
function square2(){
   var n1=2;
   var n2=5;
    console.log(`Numbers is = ${n1} , ${n2}`);
    var result=n1*n2;
    console.log(`Multiplication of Two numbers= ${result}`);
}
square2();
//Function with argument  and No Return value
function AreaSquare(side)
{
    console.log(`Given side = ${side}`);
    console.log(`Area of Square = ${side*side}`);
}
AreaSquare(6);
//Function with No Arguments and With Return value
function areaTriangle(){
    var base=4;
    var height=6;
    console.log(`Base and Height of Triangle= ${base} ,${height}`);
    var resultTri=(base*height)/2;
    return resultTri;
}
 var resultTri =areaTriangle();
console.log(`Area of Triangle= ${resultTri}`);