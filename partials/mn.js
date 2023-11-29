//var inputtt = "false"; // require("./main.js");
var inputField = require('./partials/mainn.js');
var stateHandle = require('./partials/mnn.js');
var outputt = require('./partials/mainn.js');

var submitIn = function() {
let input = inputField.value;
if (inputField.value) { //&& inputtt == false) {

inputField.value = "";
inputField.focus();
     output(input);
 stateHandle();

}
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
