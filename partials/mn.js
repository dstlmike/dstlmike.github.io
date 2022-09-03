//var output = require("./main.js");
//var inputField = require("./main.js");
//var stateHandle = require("./main.js");
//var outputt = require("./main.js");

var submitIn = function(event) {


let input = inputField.value;
if (event.keyCode === 13 && inputField.value && inputtt == "false") {
inputField.value = "";
     output(input);
 stateHandle();
//event.preventDefault();
} else {
event.preventDefault();

}

}
module.exports = submitIn;
