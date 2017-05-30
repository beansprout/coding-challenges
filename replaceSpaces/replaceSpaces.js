/*
 * Write a function that accepts a string and replaces all spaces witht the string '%20'.
 * Example: 'Mrs Jane Doe' -> 'Mrs%20Jane%20Doe'
 *
 * Note: Spaces in URLs are converted into %20.
 *
 */
const replaceSpaces = (str) => {
  return encodeURI(str);
}

console.log(replaceSpaces("good times are fun"));