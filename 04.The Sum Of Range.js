function range(start, end, step) {
  var rangeArr = [];
  if (step) {
    if (start > end && step < 0) {
      for (; start >= end; start = start + step) {
        rangeArr.push(start);
      }
    } else if (start < end && step > 0) {
      for (; start <= end; start = start + step) {
        rangeArr.push(start);
      }
    }
  } else {
    if (start > end) {
      for (; start >= end; start--) {
        rangeArr.push(start);
      }
    } else if (start < end) {
      for (; start <= end; start++) {
        rangeArr.push(start);
      }
    }
  }
  return rangeArr;
}

function sum(array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}
