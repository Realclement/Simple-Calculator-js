function appendToDisplay(input) {
    document.getElementById('display').value += input;
}

function calculate() {
    try {
        var expression = document.getElementById('display').value;
        var results = eval(expression);
        document.getElementById('display').value = results;
    }
    catch (error) {
        display.value = "Error" ;
    }
}

function clearDisplay() {
    document.getElementById('display').value = "";
}

function deleteValue() {
    var display = document.getElementById('display');
    var currentValue = display.value;
    display.value = currentValue.substring(0, currentValue.length - 1);
}