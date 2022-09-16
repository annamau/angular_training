"use strict";
class Password {
    constructor(pass = "", longitud = 8) {
        this.longitud = 8;
        this.pass = pass;
        this.longitud = longitud;
    }
    giveRandomPassword() {
        let pass = "";
        for (let i = 0; i < this.longitud; i++) {
            let number = Math.floor(Math.random() * 10);
            pass += (number + "");
        }
        return pass;
    }
}
function main() {
    let pass8 = new Password();
    let pass16 = new Password("", 16);
    console.log("Your new password is: ", pass8.giveRandomPassword());
    console.log("Your new password is: ", pass16.giveRandomPassword());
}
main();
