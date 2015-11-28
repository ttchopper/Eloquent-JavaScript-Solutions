function getAgePerCentury() {
  var obj = {};
  ancestry.forEach(function(person) {
    var century = Math.ceil(person.died / 100);
    var newArr = [];
    ancestry.forEach(function(person) {
      if (Math.ceil(person.died / 100) === century) {
        newArr.push(person.died - person.born);
      }
    });
    obj[century] = newArr;
  });
  return obj;
}

var byCentury = getAgePerCentury();

for (var century in byCentury) {
  var string = century + ": " + average(byCentury[century]);
  console.log(string);
}
