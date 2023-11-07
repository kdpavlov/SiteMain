function verify() {
    console.log("x, y")
    let x = parseFloat(elementX.value);
    let y = parseFloat(elementY.value);
    console.log(x, y)

    b = x*y

    if(isNaN(b) ) b = 0;

    if (b != 0) {
        result = 1/(x*y)
        document.getElementById("result").innerText = messageText + ' ' + result;
        document.getElementsByName('result')[0].value = result;
        check = true;
    } else {
        result = "Неверные числа"
        document.getElementById("result").innerText = messageText + ' ' + result;
        document.getElementsByName('result')[0].value = result;
        check = false;
    }
}

function send() {
    if (check) {
        let textCondition = document.getElementsByTagName('p')[0].innerText
        document.getElementsByName('formulation')[0].value = textCondition;
        document.getElementsByName('result')[0].value = result;
        document.getElementById("UserEnter").submit();
    } else {
        alert("Введите верные числа")
    }
}

function verify_send() {
    verify();
    send();
}

let messageText = document.getElementById("result").innerText
console.log(messageText)
let result;
let check = false;

const elementX = document.getElementById("x");
elementX.addEventListener('input', verify);

const elementY = document.getElementById("y");
elementY.addEventListener('input', verify);

const elementSend = document.getElementById("send");
elementSend.addEventListener('click', verify_send)