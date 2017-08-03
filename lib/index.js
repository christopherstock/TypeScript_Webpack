"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var typestyle_1 = require("typestyle");
require("fpsmeter");
var math = require("mathjs");
var MyTest;
(function (MyTest) {
    // Example A ===================================================================================================
    console.log("Chris and Carsten here!");
    function component() {
        var element = document.createElement('div');
        element.innerHTML = 'Welcome to our TypeScript test!';
        return element;
    }
    MyTest.component = component;
    document.body.appendChild(component());
    // Example B ===================================================================================================
    /** convert a style object to a CSS class name */
    var className = typestyle_1.style({ color: 'red', fontSize: '20px' });
    console.log("Testing import of 'typestyle':");
    console.log("Classname is: [" + className + "]");
    var element2 = document.createElement('div');
    element2.innerHTML = 'Carsten und Christopher - solved it all! :D :D';
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
    MyTest.NodeTest1 = NodeTest1;
    NodeTest1.test();
    // Example C ===================================================================================================
    var fpsMeter = new FPSMeter(undefined, {
        graph: 1,
        decimals: 1,
        position: "absolute",
        zIndex: 10,
        right: "5px",
        top: "auto",
        left: "auto",
        bottom: "5px",
        margin: "0",
        heat: 0
    });
    var options = fpsMeter.options;
    options.heat = 1;
    // Example D ===================================================================================================
    var test2 = math.abs(-7.5);
    console.log("Math abs is: [" + test2 + "]");
})(MyTest || (MyTest = {}));
//# sourceMappingURL=index.js.map