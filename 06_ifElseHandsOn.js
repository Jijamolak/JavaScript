var isEvenOrOdd = function (num) {
    var returnValue = "";
    if (num % 2 == 0) {
      returnValue = "EVEN";
    } 
    else {
      returnValue = "ODD";
    }
    return returnValue;
  };
  
  var result = isEvenOrOdd(23);
  console.log(`23 Given number is ${result}`);
  
  var result = isEvenOrOdd(30);
  console.log(`30 Given number is ${result}`);
  var result = isEvenOrOdd(45);
  console.log(`45 Given number is ${result}`);
  var result = isEvenOrOdd(70);
  console.log(`70 Given number is ${result}`);
  var result = isEvenOrOdd(67);
  console.log(`67 Given number is ${result}`);
  var result = isEvenOrOdd(98);
  console.log(`98 Given number is ${result}`);
  console.log("===========Step 2=========");
  var vote=function(age){
if(age>=18){
    return "Eligiable for voting";
}
else{
    return "Not eligiable for voting";
}
  }
var result=vote(18);
console.log(`18 is : ${result} `);
var result=vote(20);
console.log(`20 is : ${result} `);
var result=vote(17);
console.log(`17 is : ${result} `);  
var result=vote(40);
console.log(`40 is : ${result} `);
console.log("===========Step No 3==========");
var str=function(){
a="JavaScript-ES6";
b=a.length;
console.log(`Length of string : ${b}`);
if(b>=10){
    return "Given String contain more than 10 character";
}
else{
    return "Given String does not contain more than 10 character";
}

}
var result= str("JavaScript-ES6");
console.log(`"JavaScript-ES6", ${result}`);



console.log("=========Step 4========");
var checkStr=function(word){
if(word.startsWith("Java")){
console.log(`Given word - ${word}, starts with "Java" `);
}
else{
    console.log(`Given word - ${word}, does not starts with "Java" `);
}
}
console.log("jija");
checkStr("JavaScript Language");
checkStr("java Language");