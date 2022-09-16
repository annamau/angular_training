class Password {
    pass: string;
    longitud: Number = 8;
    constructor(pass: string = "", longitud: Number | any = 8) {
        this.pass = pass;
        this.longitud = longitud;
    }
    giveRandomPassword(){
        let pass = "";
        for(let i = 0; i < this.longitud; i++){
            let number = Math.floor(Math.random() *10);
            pass +=  (number + "");
        }
        return pass;
    }
}

function main() {
    let pass8 = new Password()
    let pass16 = new Password("", 16)
    console.log("Your new password is: ", pass8.giveRandomPassword())
}
main()