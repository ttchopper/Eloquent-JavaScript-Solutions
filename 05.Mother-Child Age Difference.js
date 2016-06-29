function mothersAgeWhenBorn(obj) {
  var arr = [];
  for (var names in obj) {
    var mother = obj[names].mother;
    var childBorn = obj[names].born;
    for (var names2 in obj) {
      if (mother === obj[names2].name) {
        arr.push(childBorn - obj[names2].born);
      }
    }
  }
  return average(arr);
}
