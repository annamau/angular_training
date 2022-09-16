var Password = /** @class */ (function () {
    function Password() {
        this.pass = "";
    }
    Password.prototype.giveRandomPassword = function () {
        var pass = "";
        for (var i = 0; i <= 8; i++) {
            var number = Math.random(10);
            pass += (number + "");
        }
    };
    return Password;
}());
function main() {
    var pass = new Password();
    console.log("Your new password is: ", pass.giveRandomPassword());
}
main();
