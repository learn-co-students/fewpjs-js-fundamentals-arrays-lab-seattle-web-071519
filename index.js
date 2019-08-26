// Write your solution here!

function append(array) {
    array.push('Odie');
    return array;
}

function prepend(array) {
    array.unshift('Odie');
    return array;
}

function removeLast(array) {
    array.pop();
    return array;
}

function removeFirst(array) {
    array.shift();
    return array;
}