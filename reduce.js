/*
  Reduce

  Good for taking a list and reducing it down to one value in a user defined way.

  Test 1
  Name your function addTogether
  Take in a list and return the result of that list added together
  Do not use a loop

  Test 2
  Name your function concatenateStringsWithSpaces
  Take in a list, return that string with those strings concatenated together with spaces between them
  Don't worry about leading or trailing whitespace
  Do not use .join or loops

  Test 3
  Name your function squaresAndSubtracts
  Map over your list, square each value, and then subtract them in order (take index 0, subtract index 1,
  then index 2, etc.)
  Do not use a loop

  Test 4
  Name your function myReduce
  Implement your own reduce
  myReduce takes three parameters: the list being operated on, a function to apply the reduction, and
  seed value to start the reduce
  You will need to use a loop

*/

const reducer = (accumulator, currentValue) => accumulator + currentValue;
addTogether = ls => ls.reduce(reducer)

const concatenator = (accumulator, currentValue) => accumulator + " " + currentValue;
concatenateStringsWithSpaces = ls => ls.reduce(concatenator)

const squaresAndSubtracts = ls => ls.map(num => num * num).reduce((accumulator, currentValue) => accumulator - currentValue)

const myReduce = (ls, fn, seed) => {
  let result = seed;
  for (let item of ls) {
    result = fn(result, item)
  }
  return result
}

// unit tests
// do not modify the below code
describe('reduce', function() {
  it('addTogether', () => {
    const testList = [5,3,0,7,2,5,6,10,9]
    expect(addTogether(testList)).toEqual(47);
  });
  it('concatenateStringsWithSpaces', () => {
    const testList = ['this', 'is', 'so', 'fun'];
    expect(concatenateStringsWithSpaces(testList).trim()).toEqual('this is so fun');
  });
  it('squaresAndSubtracts', () => {
    const testList = [10, 5, 4, 2, 1];
    expect(squaresAndSubtracts(testList)).toEqual(54);
  });
  it('myReduce', () => {
    const testList = [4,2,3,2];
    const applyDivisors = (accumulator, divisor) => accumulator/divisor;
    expect(myReduce(testList, applyDivisors, 240)).toEqual(5);
  });
});
