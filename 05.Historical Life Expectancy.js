function getAgePerCentury(array) {
  var obj = {};
  array.forEach(function(person) {
    var century = Math.ceil(person.died / 100);
    var newArr = [];
    array.forEach(function(person) {
      if (Math.ceil(person.died / 100) === century) {
        newArr.push(person.died - person.born);
      }
    });
    obj[century] = newArr;
  });
  return obj;
}

var byCentury = getAgePerCentury(ancestry);

for (var century in byCentury) {
  var string = century + ": " + average(byCentury[century]);
  console.log(string);
}
