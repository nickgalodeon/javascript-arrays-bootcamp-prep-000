var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]
const array = [1]
function addElementToBeginningOfArray(array, element) {
  array = element, ...array;
}