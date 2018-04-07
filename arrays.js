var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]
const array = [1]
function addElementToBeginningOfArray(array, element) {
  return [element, ...array]
}
function deconstructivelyAddElementToBeginningOfArray(array,element){return [array.unshift(element)]}