const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
readline.question('Enter your name to receive a gift: ', name => {
    console.log(`There was no gift, don't believe everything people tell you, ${name}!`);
    readline.close();
});