const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().split(" ");

const A = parseInt(input[0], 10);
const B = parseInt(input[1], 10);

console.log(A + B);
