/**
 * Direction:
 * Find missing number from the list
 *
 * Expected Result:
 * 8
 */
const numbers = [9, 6, 4, 2, 3, 5, 7, 0, 1];

function result(numbers) {
  // Your Code Here
  const count = [numbers.length - 1];
  var missing = []
  for ( var i = 1; i <= count; i++ ) {
    if (numbers.indexOf(i) == -1) {
      missing.push(i);
    }
  }
  return missing.toString();
}

console.log(result(numbers));
