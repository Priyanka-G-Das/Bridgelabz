exports.checkLeapYear = (year) => {
    //if (year.length != 4 || isNaN(year)) {
    // console.log("Please enter 4 digit Year");
    // }
    // else {
    if ((year % 400 == 0) || (year % 4 == 0 && year % 100 != 0)) //check leap year condition
    {
        console.log("Year " + year + " is a Leap Year"); //prints leap year
    }
    else {
        console.log("Year " + year + " is not a Leap Year"); //prints not leap year
    }
}
//}
