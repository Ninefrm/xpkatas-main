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
function setCharAt(str, index, chr) {
    if (index > str.length - 1) return str;
    return str.substring(0, index) + chr + str.substring(index + 1);
}
function isNumeric(str) {
    if (typeof str != "string") return false // we only process strings!  
    return !isNaN(str) && // is not a number
        !isNaN(parseFloat(str)) // its not a float number
}
function isValidTimeUnit(str, valid){
    if(str>valid) return true
    if(str<0) return true
    return false
}
function berlin_clock(str) {
    const splitted = str.split(':')
    if (splitted.length != 3) return false
    let result = '';
    seconds = splitted[2]
    minutes = splitted[1]
    hours = splitted[0]
    if(!isNumeric(seconds) || !isNumeric(minutes) || !isNumeric(hours)) return false
    if(isValidTimeUnit(seconds, 60) || isValidTimeUnit(minutes, 60) || isValidTimeUnit(hours, 24)) return false
    // Seconds
    seconds % 2 == 0 ? result = result + 'Y' + '\n' : result = result + 'O' + '\n'
    // Hours
    r_times = Math.round(hours / 5)
    remainder = hours % 5
    result = result + 'R'.repeat(r_times) + 'O'.repeat(4 - r_times) + '\n' + 'R'.repeat(remainder) + 'O'.repeat(4 - remainder) + '\n'
    // Minutes
    r_times = Math.round(minutes / 5)
    remainder = minutes % 5
    result_min = 'Y'.repeat(r_times) + 'O'.repeat(11 - r_times) + '\n'
    result_min_rem = 'Y'.repeat(remainder) + 'O'.repeat(4 - remainder)
    for (let i = 0; i <= r_times; i++) {
        if (i % 3 == 0 && i != 0) {
            result_min = setCharAt(result_min, i - 1, 'R')
        }
    }
    result += (result_min) + result_min_rem
    // console.log(result)
    return result;
}
module.exports = berlin_clock;