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

function accessElementInArray() {

}

function destructivelyRemoveElementFromBeginningOfArray () {

}

function removeElementFromBeginningOfArray () {

}

function destructivelyRemoveElementFromEndOfArray () {

}

function removeElementFromEndOfArray () {

}
