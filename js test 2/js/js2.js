"use strict"
console.log("THE SECOND JS DOC STARTS HERE")

//FUNCTION

function multiply(x , y)
{
    return x*y;
}

console.log(multiply(3, 3));

//MESSAGEBOXES

alert ("thank you for visiting this site, an other 2 of these will show up after this box"); //SIMLE BOX WITH SOME TEXT
let name = prompt ("can you enter your name here, please?", "NAME"); //BOX WITH USER INPUT
confirm ("thank you for entering your name " + name + ", would you like to continue?"); //BOX WITH AN ALLOW OR REFUSE BUTTON RETURNING TRUE OR FALSE