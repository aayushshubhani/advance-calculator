window.addEventListener("load", bindEvents);
//default load

var textBox;
//layout

function bindEvents() {
    textBox = document.querySelector("#box");
    document.querySelector("#calc").addEventListener("click", calculate);
    var numBtns = document.querySelectorAll(".num");
    for (var btn of numBtns) {
        btn.addEventListener("click", appendNum);
    }

    var oprBtns = document.querySelectorAll(".opr");
    for (var btn of oprBtns) {
        btn.addEventListener("click", appendOpr);
    }
    document.querySelector(".btnac").addEventListener("click",clearall);
    document.querySelector(".btnback").addEventListener("click", backspace);

}
function clearall(){
    textBox.value="";
}

function appendNum() {
    var num = this.innerText;
    textBox.value += num;
}

function appendOpr() {
    var num = this.innerText;
    var operators = ['+', '-', '*', '/']; 
    if (operators.includes(num)) {
        if (operators.includes(textBox.value.slice(-1))) {
            textBox.value = textBox.value.slice(0, -1) + num;
        } else {
            textBox.value += num;
        }
    } else {
        textBox.value += num;
    }
}

function calculate() {
    var expression = textBox.value;
    var result = eval(expression);
    textBox.value = result;
}

function backspace() {
    textBox.value = textBox.value.slice(0, -1);
}
