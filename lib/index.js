"use strict";
// Example A =======================================================================================================
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Chris and Carsten here! TEST !");
function component() {
    var element = document.createElement('div');
    element.innerHTML = 'Welcome to our TypeScript test!';
    return element;
}
document.body.appendChild(component());
// Example B =======================================================================================================
var typestyle_1 = require("typestyle");
/** convert a style object to a CSS class name */
var className = typestyle_1.style({ color: 'red', fontSize: '20px' });
console.log("Testing import of 'typestyle':");
console.log("Classname is: [" + className + "]");
var element2 = document.createElement('div');
element2.innerHTML = 'Carsten';
element2.className = className;
document.body.appendChild(element2);
var NodeTest1 = (function () {
    function NodeTest1() {
    }
    NodeTest1.test = function () {
        console.log("NodeTest1::test() being invoked");
        var test = typestyle_1.style.length;
        console.log(">>> style length is [" + test + "]");
        // let fpsMeter:FPSMeter = new FPSMeter();
        //let test:number = style.length;
    };
    return NodeTest1;
}());
NodeTest1.test();
// Example C =======================================================================================================
// .. is not a module. ????
// import FPSMeter from 'FPSMeter';
// import FPSMeter = require('FPSMeter');
//import _ from 'lodash';
// import { debounce } from "lodash";
// import * as debouce from 'lodash/debounce';
//# sourceMappingURL=index.js.map