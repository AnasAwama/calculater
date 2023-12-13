const specialChar=['^2','10^','e^','+','%','-','÷','x','!','sin(','asin(','ln(','pi','cos(','log(','e','tan(','root(','^'];
let findChar;
let currentText;
var enableSwitch=false;
let dotUsed = false;
let ans = 0;

var buttons = document.querySelectorAll('td').value;

addValue.addEventListener("click",calculation)

function calculation(value) {
    currentText = document.getElementById("text").value;
    
    dotUsed = false;

    document.getElementById("text").value = currentText + value;
    findChar= specialChar.find(char => currentText.includes(char));
    
}

function results(){
    currentText = document.getElementById("text").value;
    findChar = specialChar.find(char => currentText.includes(char)); 
    var operator = currentText.split(findChar);
    var number1;
    var number2;
    
    if(operator.length === 2){
         number1 = parseFloat(operator[0]);
         number2 = parseFloat(operator[1]);
}
else{
    console.log("invalid number")
}
    console.log("number1",number1);
    console.log("number2",number2);
    
    switch(findChar) {
        case '+':
          document.getElementById('text').value=number1+number2
          break;
        case '-':
            document.getElementById('text').value=number1-number2
          break;
          case '÷':
          document.getElementById('text').value=number1/number2
          break;
        case 'x':
            document.getElementById('text').value=number1*number2
          break;
          case '%':
            document.getElementById('text').value=number1%number2
          break;
          case 'e':
          document.getElementById('text').value=number1*Math.E
          break;
        case 'pi':
            document.getElementById('text').value=number1*Math.PI
          break;
          case 'log(':
          document.getElementById('text').value=Math.log2(number2)
          break;
        case 'root(':
            document.getElementById('text').value=Math.sqrt(number2)
          break;
          case 'cos(':
            document.getElementById('text').value=Math.cos(number2)
          break;
          case 'sin(':
            document.getElementById('text').value=Math.sin(number2)
          break;
          case 'tan(':
            document.getElementById('text').value=Math.tan(number2)
          break;
          case 'atan(':
            document.getElementById('text').value=Math.atan(number2)
          break;
          case 'asin(':
            document.getElementById('text').value=Math.asin(number2)
          break;
          case 'acos(':
            document.getElementById('text').value=Math.acos(number2)
          break;
          case '!':
            var val=factorialize(number1)
            document.getElementById('text').value=val
          break;
          case '^':
            document.getElementById('text').value=Math.pow(number1,number2)
          break;
          case '^2':
            document.getElementById('text').value=Math.pow(number1,2)
          break;
          case '10^':
            document.getElementById('text').value=Math.pow(10,number2)
          break;
          case 'e^':
            document.getElementById('text').value=Math.pow(Math.E,number2)
          break;
        default:
          break;
      }
      ans=document.getElementById('text').value;
      console.log("Answer butten"+ans);

}

function factorialize(num) {
    if (num < 0) 
          return -1;
    else if (num == 0) 
        return 1;
    else {
        return (num * factorialize(num - 1));
    }
  }
function Switchs(){
    enableSwitch=!enableSwitch

    var leftButtons=document.querySelectorAll('.column1 input[type="button"]');
    leftButtons.forEach(function (button) {
        if (button.value !== 'sin' && button.value !== 'cos' && button.value !== 'tan') {
            button.disabled = enableSwitch;
        }
    });

    if(enableSwitch==true){
      var asin = document.getElementById('sin');
      var acos = document.getElementById('cos');
      var atan = document.getElementById('tan');
      asin.value = 'asin';
      acos.value = 'acos';
      atan.value = 'atan';
    }
    else{
      var asin = document.getElementById('sin');
      var acos = document.getElementById('cos');
      var atan = document.getElementById('tan');
      asin.value = 'sin';
      acos.value = 'cos';
      atan.value = 'tan';
    }

    // var asin = document.getElementById('sin');
    // var acos = document.getElementById('cos');
    // var atan = document.getElementById('tan');
    // asin.value = 'asin';
    // acos.value = 'acos';
    // atan.value = 'atan';
    

}
document.querySelector('.switch input').addEventListener('change', Switchs);

function clearing(){
    document.getElementById('text').value="";
}

function dotVal() {
  if (!currentText.endsWith('.') && !currentText.includes('.')) {
      currentText = document.getElementById('text').value = currentText + '.';
  }
}

function dotButtonClicked() {
  if (!dotUsed) {
      currentText = document.getElementById("text").value;
      document.getElementById("text").value = currentText + '.';
      dotUsed = true;
  }
}
document.getElementById('dotButton').addEventListener('click', dotButtonClicked);

function ansButten(){

  document.getElementById("text").value = ans;
}