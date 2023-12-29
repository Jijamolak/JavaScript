function stringHandsOn() {
  var str = "   Hey you are doing good, keep it up    ";
  console.log(`Given String is ==> ${str}`);
  var strr = str.length;
  console.log(`Total length of given string==>  ${strr}`);
  console.log(` Before trim string is: ${str}, It's length is: ${str.length} `);
  var trimResult = str.trim();
  var trimlength=trimResult.length;
  console.log(` After trim string is: ${trimResult}, It's length is: ${trimlength} `);
var spacecount=strr-trimlength;
console.log(`Total number of extra spaces count ==> ${spacecount}`);
console.log(`First character after trim : ==> ${trimResult.charAt(0)} ,Last character after trim : ==> ${trimResult.charAt(trimlength-1)}`);
var indexOfGood = trimResult.indexOf('good');
console.log("Index of good is: ", indexOfGood);
var substr=trimResult.substring(22,trimlength)
console.log(`Substring starting from index 22 is : ==> ${substr}`);
var end=trimResult.endsWith("up");
console.log(`String ends with up is : ==> ${end}`);
var start=trimResult.startsWith("Hey");
console.log(`After trimming string start with :==> ${start}`);
var spli = trimResult.split(" ");
console.log(`splitting of words ===> ${spli}`);
var wordCount=spli.length;
console.log(`Total words in string after strimming is : ==> ${wordCount}`);
}
stringHandsOn();
