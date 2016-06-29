function arrayToList(array) {
  var list = null;
  for (var i = array.length - 1; i >= 0; i--) {
    list = {
      value: array[i],
      rest: list
    };
  }
  return list;
}



// My first solution for arrayToList Function

/* function arrayToList(array) {
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
} */



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



function prepend(element, list) {
  var newList = {};
  newList.value = element;
  newList.rest = list;
  return newList;
}



// Nth function using for loop
/* function nth(list, number) {
  var element;
  var counter;
  for (var i = 0, j = list; ; i++, j = j.rest) {
    counter = i;
    if (counter === number) {
      element = j.value;
      break;
    }
    if (j.rest === null) {
      element = undefined;
      break;
    }
  }
  return element;
} */



// Nth function using recursion
function nth(list, number) {
  var element;
  if (list === null) {
    return undefined;
  } else if (number === 0) {
    element = list.value;
    return element;
  } else {
    return nth(list.rest, number - 1);
  }
}
