// const specialChar=['+','-','=','÷','x']
// const findChar= specialChar.find(function(element){

// })
var buttons = document.querySelectorAll('td').value;

addValue.addEventListener("click",calculation)

function calculation(value) {
    var currentText = document.getElementById("text").value;
    document.getElementById("text").value = currentText + value;
    

}

