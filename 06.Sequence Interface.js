function logFive(sequence) {
    while (sequence.state < 4) {
        if (sequence.state === sequence.end) {
            return;
        }
        console.log(sequence.next());
    }
}

function ArraySeq(arr) {
    this.state = -1;
    this.arr = arr;
    this.end = this.arr.length - 1;
}
ArraySeq.prototype.next = function () {
    this.state += 1;
    return this.arr[this.state];
};

function RangeSeq(from, to) {
	this.state = -1;
    this.from = from;
    this.end = to - from;
}

RangeSeq.prototype.next = function () {
    this.state += 1;
    return this.from + this.state;
};

logFive(new ArraySeq([1, 2]));
// → 1
// → 2

logFive(new RangeSeq(99, 1000));
// → 100
// → 101
// → 102
// → 103
// → 104
