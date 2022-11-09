let uc = require("upper-case");

const greeter = () => {
    for(var i = 0; i < 10; i++) {
        console.log(uc.upperCase("hello world"));
    }
}

console.log(uc.upperCase("string"));

greeter();