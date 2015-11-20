function reverseArray(array) {
  var arr = [];
  for (var i = 1; i <= array.length; i++) {
    arr.push(array[array.length - i]);
  }
  return arr;
}

function reverseArrayInPlace(array) {
  var length = array.length - 1;
  for (var i = 0; i < (length / 2); i++) {
    var last = array[i];
    array[i] = array[length - i];
    array[length - i] = last;
  }
  return array;
}