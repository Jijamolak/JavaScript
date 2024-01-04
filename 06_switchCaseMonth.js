function monthOfYear(month){
    switch (month) {
        case 1:
          console.log(` Month = ${month} ==> January`);
          break;
        case 2:
            console.log(` Month = ${month} ==> February`);
          break;
        case 3:
            console.log(` Month = ${month} ==> March`);
          break;
        case 4:
            console.log(` Month = ${month} ==> April`);
          break;
        case 5:
          console.log(` Day Number ${month} ==> May`);
          break;
        case 6:
          console.log(` Day Number ${month}} ==> June`);
          break;
        case 7:
          console.log(` Day Number ${month} ==> July`);
          break;
          case 8:
          console.log(` Day Number ${month} ==> August`);
          break;
          case 9:
          console.log(` Day Number ${month} ==> September`);
          break;
          case 10:
          console.log(` Day Number ${month} ==> Octomber`);
          break;
          case 11:
          console.log(` Day Number ${month} ==> November`);
          break;
          case 12:
          console.log(` Day Number ${month} ==> December`);
          break;
        default:
          console.log(` Invalid Input --> Month Number ${month}`);
          break;
      }

}
monthOfYear(0);
monthOfYear(2);
monthOfYear(5);
monthOfYear(12);
monthOfYear(15);
monthOfYear(100);
monthOfYear(null);
monthOfYear(undefined);