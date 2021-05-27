/**
 * Direction:
 * Find prefix of the word from array of string
 *
 * Expected Result:
 * fl
 */
const words = ['flower', 'flow', 'flight'];

function result(words) {
  // Your Code Here
  const arrPrefix =[]
  words.forEach(element => {
    arrPrefix.push(element.substring(0,2))
  });
  return arrPrefix.toString();
}

console.log(result(words));
