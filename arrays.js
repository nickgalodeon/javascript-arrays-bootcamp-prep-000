var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]
var array = [1]
function addElementToBeginningOfArray(array, element){[element, ...array] ;return array}