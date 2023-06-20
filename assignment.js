
/**
 * 1.Date Object: * 
 * a. Create a function that takes a date in the format "YYYY-MM-DD" as a parameter and returns the day of the week for that date. The function should use the Date object. * 
 * b. Implement the function to display the day of the week for the current date.
 */

// a
const getDayOfWeek = (inputDate) => {
  const date = new Date(inputDate);
  const weekList = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayOfWeekIndex = date.getDay();

  return weekList[dayOfWeekIndex];
}
const date = "2023-06-20";
const weekDay = getDayOfWeek(date);

// console.log(weekDay);  // Output: "Monday"

// b 
function getCurrentDay() {
  const date = new Date();
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayOfWeekIndex = date.getDay();

  return daysOfWeek[dayOfWeekIndex];
}

const dayOfWeek = getCurrentDay();
// console.log(dayOfWeek);  // Output: "Monday" (or the current day of the week)

/*
2.Math Object:
a. Write a JavaScript function that takes an array of numbers as input and returns the square root of the sum of squares of all the numbers. Use the Math object to perform the necessary calculations.
---------------
b. Implement the function to display the square root of the sum of squares for an array of numbers.
*/
// a 
const sumOfSquareRoot = (arr)=> {
    const sqares = arr.map(item => Math.pow(item , 2))
    const sum = sqares.reduce((sum, curr)=> sum+curr, 0)
    const sqrt = Math.sqrt(sum)
    return sqrt;
}
// b
const result2 = sumOfSquareRoot([2,4,6])
// console.log(result2);


/*
3.Numbers:
a. Write a JavaScript function that takes a positive integer as input and returns true if it is a prime number, otherwise returns false.
b. Implement the function to check if a given positive integer is a prime number.
*/




/*
4.Window Object:

a. Create a function that opens a new window with a specified URL and dimensions (width and height).

b. Implement the function to open a new window with the URL "https://www.example.com" and dimensions 800x600.
*/

function openNewWindow(url, width, height) {
  const left = (window.innerWidth - width) / 2;
  const top = (window.innerHeight - height) / 2;
  const options = `width=${width},height=${height},left=${left},top=${top}`;
  window.open(url, "_blank", options);
}

const url = "https://example.com";
const width = 800;
const height = 600;
openNewWindow(url, width, height);

/*
5.Navigator Object:
a. Write a JavaScript function that detects the user's browser name and version using the navigator object.

b. Implement the function to display the user's browser name and version.
*/



 




