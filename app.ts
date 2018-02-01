import readline = require('readline');


console.log("\u001b[2J\u001b[0;0H");
var userName = process.env.USERNAME;
let currentDate = new Date();
let today: number[] = [new Date().getDate(), (new Date().getMonth() + 1)];
var bDay: string[] = ['',''];


function calcRemain(bDay) {
    var remainToBDay: number[] = [0, 0];
    remainToBDay[0] = parseInt(bDay[0]) - today[0];
    remainToBDay[1] = parseInt(bDay[1]) - today[1];
    console.log('In ' + remainToBDay[1] + ' months and ' + remainToBDay[0]+' day it will be your birthday!')
}

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function greeter(){
    rl.question("When is your birthday? Answer using the DD/MM format\n", (birthD) => {
        console.log('Welcome ' + userName + ', the current time is:\n ' + currentDate)
        calcRemain(birthD.split('/'));
        //this.bDay = birthD.split('/', 2);
        //console.log('bday: '+this.bDay);
        rl.close();
});
}
greeter();
