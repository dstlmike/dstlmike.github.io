//var inputtt = "false"; // require("./main.js");
//var inputField = require("./main.js");
//var stateHandle = require("./mnn.js");
//var outputt = require("./mainn.js");

var submitIn = function(event) {
//event.preventDefault();
//inputField.autofocus = true;
let input = inputField.value;
if (inputField.value && inputtt == "false") {

// if (inputtt == false)
inputField.value = "";

     output(input);
 stateHandle();
//event.preventDefault();
//}// else {
//event.preventDefault();

}
//event.preventDefault();
//return false;
//stateHandle();
}
/*
//var stateHandle = require("./mnn.js");
//var output = require("./mainn.js");

document.addEventListener("DOMContentLoaded", () => {
var inputField = document.getElementById("input");
inputField.addEventListener("keydown", function(event) {
let input = inputField.value;
if (event.code === "Enter" && inputField.value && inputtt == "false") {
//let input = inputField.value;
inputField.value = "";
output(input);
stateHandle;
}
});
});
*/
module.exports = submitIn;
