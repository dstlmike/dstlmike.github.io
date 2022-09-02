var ooutput = require("./main.js");
var iinputField = require("./main.js");
var sstateHandle = require("./main.js");
//var outputt = require("./main.js");

//submitIn(event);

function submitIn(event) {
let input = iinputField.inputField.value;
if (iinputField.inputField.value && iinputField.inputtt == "false") {
iinputField.inputField.value = "";
     ooutput.output(input);
 sstateHandle.stateHandle();
//event.preventDefault();
//} else {
//return false;
}
}

module.exports = {
submitIn
}
