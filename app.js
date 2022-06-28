function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log("Result: " + num);
    return null;
}
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    var a = cb(result);
    console.log(a);
}
printResult(add(5, 12));
var combineValues;
combineValues = add;
// combineValues = printResult;
console.log(combineValues(8, 8));
addAndHandle(10, 20, function (result, ss) {
    // console.log(result);
    // console.log(dw);
    return "dwcccc";
});
