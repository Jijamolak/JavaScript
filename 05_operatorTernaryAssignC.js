console.log("===============Function Expression=============");
var maleMarriageEligibility = function(gender,age,boyName){

    var result = gender=="Male" && age>=21 ?  `Hey ${boyName}
     you are eligible for Marriage`: `Hey ${boyName} Unfortunately - 
     You are not eligible, Please try next time.`; 
 
     console.log(result);
 
 }
 
 maleMarriageEligibility("Male", 25, "Billgates");
 maleMarriageEligibility("Male", 17, "Stew Jobs");
 maleMarriageEligibility("male", 20, "Elon");
 console.log("===========Female marriage eligiability==========");
 var femaleMarriageEligibility = function(gender,age,girlsName){

    var result = gender=="Female" && age>=18 ? `Hey ${girlsName}
     you are eligible for Marriage`: `Hey ${girlsName} Unfortunately - 
     You are not eligible, Please try next time.`; 
 
     console.log(result);
 
 }
 
 femaleMarriageEligibility("Female", 16, "Jenifer");
 femaleMarriageEligibility("Female", 27, "Maninda Gates");
 femaleMarriageEligibility("Female", 20, "Gita");
 console.log("=============== Normal  Function =============");
 function maleMarriageEligibility(gender,age,boyName){

    var result = gender=="Male" && age>=21 ?  `Hey ${boyName}
     you are eligible for Marriage`: `Hey ${boyName} Unfortunately - 
     You are not eligible, Please try next time.`; 
 
     console.log(result);
 
 }
 
 maleMarriageEligibility("Male", 25, "Billgates");
 maleMarriageEligibility("Male", 17, "Stew Jobs");
 maleMarriageEligibility("male", 20, "Elon");
 console.log("===========Female marriage eligiability==========");
function femaleMarriageEligibility(gender,age,girlsName){

    var result = gender=="Female" && age>=18 ? `Hey ${girlsName}
     you are eligible for Marriage`: `Hey ${girlsName} Unfortunately - 
     You are not eligible, Please try next time.`; 
 
     console.log(result);
 
 }
 
 femaleMarriageEligibility("Female", 16, "Jenifer");
 femaleMarriageEligibility("Female", 27, "Maninda Gates");
 femaleMarriageEligibility("Female", 20, "Gita");