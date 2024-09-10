function generate(){
    document.getElementById("display").innerHTML=getRandomColor();
  }
 function getRandomColor() {
      var letters =
      "0123456789";
     /*another type of OTP and change *6 - *16*/
      /*'0123456789ABCDEF';*/
     
      var code = '';
      for (var i = 0; i < 6; i++) {
        code += letters[Math.floor(Math.random() *6)];
      }
      return code;
    }