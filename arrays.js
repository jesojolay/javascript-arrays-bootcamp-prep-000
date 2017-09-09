chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(arr, element) {
     var newarr = arr[element,...arr];
     return newarr;
}

function destructivelyAddElementToBeginningOfArray(arr, element) {
    return arr.unshift(element);
}

function addElementToEndOfArray(arr, element) {
     var newarr = arr[...arr, element];
     return newarr;
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
