function inputNumber() {
    var number = document.getElementById('number').value;
    if(number < 0) {
        alert('Number is not valid');
    } else {
        var kq = number.split('').reverse().join('');
    }
    document.getElementById('result').innerHTML = 'Số đảo ngược của ' + 
    number + ' là: ' + kq;
    
}