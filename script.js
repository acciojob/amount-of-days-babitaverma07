//your JS code here. If required.
function daysOfAYear(year) {
  if (year % 4 === 0) { // check if year is a leap year
    if (year % 100 === 0) { // check if year is a century year
      if (year % 400 === 0) { // check if year is a leap century year
        return 366; // return 366 for leap century years
      } else {
        return 365; // return 365 for non-leap century years
      }
    } else {
      return 366; // return 366 for leap years
    }
  } else {
    return 365; // return 365 for non-leap years
  }
}