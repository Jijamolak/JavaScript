function inter(gradScore, hscScore, sscScore, candidateName) {
    
    if (gradScore>=70||hscScore>=80||sscScore>90) {
      console.log(`Congrates ${candidateName} You Are eligiable for TCS interview`);
    } else{
      console.log(`Unfortunatly ${candidateName} you are not eligiable for TCS interview`);
    }
  }
  inter(80, 86, 90, "Jija");
  inter(70, 65, 55, "Pooja")
  inter(60, 79, 88, "Sonali")