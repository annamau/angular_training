let writeb = true
let multiplyb = false
let substractb = false
let divideb = false
let addb = false

function putMe(num) {
    var text = parseFloat(document.getElementById("text").textContent);
    if (writeb) {
        if (text == "0") {
            document.getElementById("text").textContent = num;
        }
        else {
            document.getElementById("text").textContent = text + "" + num;
        }
    } else if (multiplyb) {
        document.getElementById("text").textContent = text * num;
        multiplyb = false;
        writeb = true;
    } else if (divideb) {
        document.getElementById("text").textContent = text / num;
        divideb = false;
        writeb = true;
    } else if (substractb) {
        document.getElementById("text").textContent = text - num;
        substractb = false;
        writeb = true;
    } else if (addb) {
        document.getElementById("text").textContent = text + num;
        addb = false;
        writeb = true;
    }

}

function clearData() {
    document.getElementById("text").textContent = 0;
}

function multiply() {
    multiplyb = true;
    writeb = false;
}

function substract() {
    substractb = true;
    writeb = false;
}

function add() {
    addb = true;
    writeb = false;
}
function divide() {
    divideb = true;
    writeb = false;
}