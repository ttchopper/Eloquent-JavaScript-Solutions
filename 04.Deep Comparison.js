function deepEqual(value1, value2) {
  if ((typeof value1 === "object" && value1 !== null) &&
    (typeof value2 === "object" && value2 !== null)) {
    var count1 = 0;
    for (var prop in value1) {
      count1 = count1 + 1;
    }
    var count2 = 0;
    for (var prop in value2) {
      count2 = count2 + 1;
    }
    if (count1 !== count2) {
      return false;
    } 
    else {
      var result;
      for (var prop in value1) {
        if (prop in value2) {
          result = deepEqual(value1[prep], value2[prep]);
          if (!result) {
            break;
          }
        } 
        else {
          return false;
        }
      }
      return result;
    }
  } 
  else {
    return value1 === value2;
  }
}
