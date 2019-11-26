"use strict";
// IF ELSE

let x = 213;
let y = 1234;
if (x > y)
{
    console.log(y);
}
else if (x == y)
{
    console.log("both");
}
else
{
    console.log(x);
}

//SWITCH

x = 4;
switch (x)
{
    default:
        console.log("casual number");
        break;
    case 3:
    case 5:
    case 7:
    case 13:
    case 17:
    case 19:
    case 11:
        console.log("prime number under 20");
}

//FOR

for (let i = 0; i <= 10 ; i++)
{
    //count to 10
    console.log(i)
}

//WHILE

let z = 10;
while (z >= 0)
{
    //countdown from 10 to 0
    console.log(z);
    z--;
}

//DO WHILE

let counter = 0
do
{
    console.log("repeating text you don't need to look at")
    counter++;
}
while (counter < 5)

//BREAK

let counter2 = 0
while (true) //infinate loop
{
    console.log("you can't stop me!")
    counter2++;
    if (counter2 == 30)
    {
        console.log("i know, but she can")
        break;
    }
}