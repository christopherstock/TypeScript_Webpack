"use strict";
// Example A =======================================================================================================
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = require("lodash");
// test
alert("index.ts being invoked");
console.log("index.ts being invoked");
// test function
function component() {
    var element = document.createElement('div');
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = lodash_1.default.join(['Hello', 'webpack'], ' ');
    return element;
}
document.body.appendChild(component());
// Example B =======================================================================================================
var typestyle_1 = require("typestyle");
// impossible via node ?
//window.alert("The going is much more than trying from this point!");
console.log("index.ts being invoked");
var NodeTest1 = (function () {
    function NodeTest1() {
    }
    NodeTest1.test = function () {
        console.log("NodeTest1::test() being invoked");
        // let fpsMeter:FPSMeter = new FPSMeter();
        var test = typestyle_1.style.length;
        console.log("style length is [" + test + "]");
    };
    return NodeTest1;
}());
NodeTest1.test();
//# sourceMappingURL=index.js.map