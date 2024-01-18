 var a= function()
 {
    arra = [ 0,1,2,3,4,5,6,7,8,9,10]; 
console.log(arra);
for (let index = 0; index < arra.length; index++) {
    const element = arra[index];
    console.log(element);
}
 }
a();
console.log("=======Q 2=====");
let str ="UI Developer";
let vowelsCount=0;
for (let index = 0; index < str.length; index++) {
let ch=str.charAt(index).toUpperCase();
if(ch=='a' || ch=='e'||ch=='i'||ch=='o' ||ch=='u')
    vowelsCount=vowelsCount+1;

console.log(vowelsCount);
}
console.log("======Q 3 ========");

function multipli(n1,n2){
    console.log("Given numbers are=",n1,n2);
    var result=n1*n2;
    console.log(`Result is = ${result} `);
    }
    multipli(6,6)
    a=typeof(multipli);
   console.log(`type of multiplication  function= ${a}`);
str="Jija Molak";
a=typeof(str);
console.log(`Typeof of a  str variable= ${a}`);
console.log("========Prime number========");
var a=function (num){
    for (let index = 2; index < num; index++) {
        if (num%index==0) {
            return false;
        
        } 
    }
    return true;}
console.log(`  ${a(4)}`);
console.log(` 3 prime number= ${a(3)}`);
console.log(`  7 prime number= ${a(7)}`);
console.log("=========factorial number=======");
function fact(num) {
    let multiply=1;
    for (let index = num; index>=1; index--) {
        multiply=multiply*index;

        
    }
    return multiply;
}
 var a=fact(5);
 console.log(a);
console.log("========15/1======");
const arrayNum = [ 1,2,3,4,5 ]; 
console.log(arrayNum);
for (let index = 0; index < arrayNum; index++) {
  a=index*index;   
  console.log(a);
}
console.log("==============");
function n() {
    let arr=[1,2,3,4]
    let newArr=[];
    for (let index = 0; index < arr.length; index++) {
        newArr.push(arr[index]*arr[index]);
       
    }
    return newArr;
 
 
 
 }
 let az=n();
 console.log(az);
 console.log("=============swaping of 3 variables==========");
 function swap(arg1,arg2,arg3) {
    var a=arg1;
    var b=arg2;
    var c=arg3;
    console.log(`First number= ${a}`);
    console.log(`second number= ${b}`);
    console.log(`third number= ${c}`);
    var temp;
    temp=a;
    b=c;
   var d=b;
    
    
    console.log(`First number= ${b}`);
    console.log(`second number= ${d}`);
    console.log(`third number= ${temp}`);
    
 }
 swap(10,20,30)


console.log("=======17/01/======");
 
x = 0.1 ;
y = 0.9 ;
++x  +  x++  +  ++y  +   y++
a=++x
console.log(a);
x = 0.1 ;
y = 0.9 ;
b=x++
console.log(b);
x = 0.1 ;
y = 0.9 ;
c=++y;
console.log(c);

x = 0.1 ;
y = 0.9 ;
d=y++;
console.log(d);
console.log(a=b+c+d);
console.log("===========");
x = 0.1 ;6 output;
y = 0.9 ;
++x  +  x++  +  ++y  +   y++
