/*//var output = require("./main.js");
//var inputField = require("./main.js");
//var stateHandle = require("./main.js");
//var outputt = require("./main.js");

//var submitIn = 
//module.exports = function submitIn(event) {


let input = inputField.value;
//if (inputField.value && inputtt == "false") {

 if (inputtt == false)
inputField.value = "";
     output(input);
 stateHandle;
//event.preventDefault();
//} //else {
//event.preventDefault();

//}

}
*/

document.addEventListener("DOMContentLoaded", () => {
var inputField = document.getElementById("input");
inputField.addEventListener("keydown", function(event) {
if (event.code === "Enter") {
let input = inputField.value;
inputField.value = "";
output(input);
}
});
});

module.exports = submitIn;
