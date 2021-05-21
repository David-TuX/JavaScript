//Question 01:
function checkSNT(n) {
    var check = true;
    if(n < 2) {
        check = false;
    }
    for(var i = 2; i <= Math.sqrt(n); i++ ) {
        if(n%i == 0 ) {
            check = false;
        } 
    }
    return check;
}

function inputNumber() {
    var number = document.getElementById('snt').value;
    
    // for(var i = 0; i <= number; i++) {
        if(checkSNT(number) == true) {
            document.getElementById("result").innerHTML = number + ' là số nguyên tố'
        } else {
            document.getElementById("result").innerHTML = number + ' không phải là số nguyên tố'
        }
    // }
    
}

//Question 02:

function nhap() {
    var elements = document.getElementById('ptu').value;
    var array = [];
    array = elements.split(', ').join(' ');
    document.getElementById('arrayA').innerHTML = 'Mảng A là: ' + array;
    for(var i in array) {
        console.log(typeof array[i])
    }
    
    
}
