"use strict";
// .. is not a module. ????
//import FPSMeter from 'FPSMeter';
Object.defineProperty(exports, "__esModule", { value: true });
window.alert("The going is much more than trying from this point!");
// Example A =======================================================================================================
//import _ from 'lodash';
// import { debounce } from "lodash";
// import * as debouce from 'lodash/debounce';
// test
alert("index.ts being invoked");
console.log("index.ts being invoked");
// test function
function component() {
    var element = document.createElement('div');
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = 'Welcome - TypeScript test.';
    //_.join(['Hello', 'webpack'], ' ');
    return element;
}
document.body.appendChild(component());
// Example B =======================================================================================================
var typestyle_1 = require("typestyle");
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