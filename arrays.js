var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]
const array = [1]
function addElementToBeginningOfArray(array, element) {
  return [element, ...array]
}
function destructivelyAddElementToBeginningOfArray(array,element){
  [array.unshift(element)]
  return array
}
function addElementToEndOfArray(array, element){
  return [...array, element]
}
function destructivelyAddElementToEndOfArray(array, element){
  [array.push(element)]
  return array
}
function accessElementInArray(array, element){
  return (array[element])
}
function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift(0)
  return array
}
function removeElementFromBeginningOfArray(array){
  var newArray.slice(1)
  return newArray
}
function destructivelyRemoveElementFromEndOfArray(array){
  
}