chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(arr, element) {
    return arr[element,...arr];
}

function destructivelyAddElementToBeginningOfArray(arr, element) {
    return arr.unshift(element);
}

function addElementToEndOfArray(arr, element) {
    return arr[...arr, element];
}

function destructivelyAddElementToEndOfArray(arr, element) {
    return arr.push(element);
}

function accessElementInArray(arr, index) {
    return arr[index];
}

function destructivelyRemoveElementFromBeginningOfArray (arr) {
    return arr.shift();
}

function removeElementFromBeginningOfArray () {

}

function destructivelyRemoveElementFromEndOfArray () {

}

function removeElementFromEndOfArray () {

}
