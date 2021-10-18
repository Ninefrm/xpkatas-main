/* 
The clock is read from the top row to the bottom. The top row of four red fields denote five full hours each, 
alongside the second row, also of four red fields, which denote one full hour each, displaying the hour 
value in 24-hour format. The third row consists of eleven yellow-and-red fields, which denote five full 
minutes each (the red ones also denoting 15, 30 and 45 minutes past), and the bottom row has another four 
yellow fields, which mark one full minute each. The round yellow light on top blinks to denote even- 
(when lit) or odd-numbered (when unlit) seconds.

Example: Two fields are lit in the first row (five hours multiplied by two, i.e. ten hours), 
but no fields are lit in the second row; therefore the hour value is 10.
Six fields are lit in the third row (five minutes multiplied by six, i.e. thirty minutes), 
while the bottom row has one field on (plus one minute). 
Hence, the lights of the clock altogether tell the time as 10:31. (Source: Wikipedia)

Task: Write a function that takes in a particular time as 24h format ('hh:mm:ss') 
and outputs a string that reproduces the Berlin Clock. 
The parameters should be as follows:

    “O” = Light off
    “R” = Red light
    “Y” = Yellow light 
*/

// Input String:
// 12:56:01

// ODD - LIGHT ON (Y) 
// EVEN - LIGHT OFF (O)

// Output String:
// O SEC even-(when lit) or odd-numbered (when unlit)
// RROO HOURS
// RROO HOURS
// YYRYYRYYRYY MINUTES R - 15 MTNS Y - 5
// YOOO MINUTE max 5

function berlin_clock(str) {
    const splitted = str.split(':')
    console.log(splitted)
    if(splitted[2]%2){
        console.log('O')
    }
    console.log(splitted[0]%5)
    if(splitted[0]%5 == 0){
        // 0 5 10 15 20
        Rnumbers = splitted[0]/5 
        console.log('R'.repeat(Rnumbers) + 'O'.repeat(4-Rnumbers))
        
    }else{
        console.log('hour no exact')
    }
    return "O\nRROO\nRROO\nYYRYYRYYRYY\nYOOO"
}
module.exports = berlin_clock;