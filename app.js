function combine(input1, input2, resultConversion) {
    if ((typeof input1 === "number" && typeof input2 === "number") ||
        resultConversion === "as-number") {
        return +input1 + +input2;
    }
    return input1.toString() + " " + input2.toString();
}
var combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);
var combinedStringAges = combine("30", "26", "as-number");
console.log(combinedAges);
var combinedNames = combine("Yi-Ru", "Lan", "as-text");
console.log(combinedNames);
