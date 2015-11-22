function arrayToList(array) {
  var arr = [];
  for (var i = 0; i <= array.length - 1; i++) {
    var node = {
      value: array[i],
      rest: {}
    };
    arr.push(node);
  }
  for (var j = 0; j <= arr.length - 1; j++) {
    arr[j].rest = arr[j + 1];
    arr[arr.length - 1].rest = null;
  }

  return arr[0];
}

function listToArray(list) {
  var arr = [];
  for (var i = list;; i = i.rest) {
    arr.push(i.value);
    if (i.rest === null) {
      break;
    }
  }
  return arr;

}
