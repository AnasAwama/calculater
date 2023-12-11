const specialChar=['+','%','-','÷','x','!','sin(','ln(','pi','cos(','log(','e','tan(','root(','^'];
let findChar;
let currentText;
var enableSwitch=false;

var buttons = document.querySelectorAll('td').value;

addValue.addEventListener("click",calculation)

function calculation(value) {
    currentText = document.getElementById("text").value;
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
          case '!':
            var val=factorialize(number1)
            document.getElementById('text').value=val
          break;
          case '^':
            document.getElementById('text').value=Math.pow(number1,number2)
          break;
        default:
          break;
      }

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

    

}
document.querySelector('.switch input').addEventListener('change', Switchs);

function clearing(){
    document.getElementById('text').value="";
}