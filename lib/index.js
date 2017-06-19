"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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