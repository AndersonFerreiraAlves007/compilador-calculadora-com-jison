// mymodule.js
var parser = require("./calculator").parser;

function exec (input) {
    return parser.parse(input);
}

var twenty = exec("4 * 5");

console.log(twenty)
