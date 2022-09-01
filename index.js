// Allow the user to enter a name
let firstName = prompt("Enter firsname all in small letters: ")
// take the first character of the name by using the slice function
let firstChar = firstName.slice(0,1)
// use the toUpperCase function to make the first character a capital letter
let firstUpperCase = firstChar.toUpperCase()
// create a new variable that takes the remaining characters of the name and take into consideration the name lenght
let restOfName = firstName.slice(1,firstName.lenght)
// change the remaining characters to lowercase
restOfName = restOfName.toLowerCase()
// now concantenate the first character and the remaining character and store in the name variable
firstName = firstUpperCase + restOfName
// output result
alert("Hello " + firstName + "," + " welcome to web development.")