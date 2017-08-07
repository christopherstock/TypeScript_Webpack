"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typestyle_1 = require("typestyle");
require("fpsmeter");
const math = require("mathjs");
const BABYLON = require("babylonjs");
const src_1 = require("./de/mayflower/mfg/src");
console.log("Welcome!! 7");
console.dir(src_1.Mfg);
console.dir(src_1.MfgInit);
var Main;
(function (Main) {
    // Example A ===================================================================================================
    function component() {
        let element = document.createElement('div');
        element.innerHTML = 'Welcome to our TypeScript test!';
        return element;
    }
    Main.component = component;
    document.body.appendChild(component());
    // Example B ===================================================================================================
    const className = typestyle_1.style({ color: 'red', fontSize: '20px' });
    console.log("Testing import of 'typestyle':");
    console.log("Classname is: [" + className + "]");
    let element2 = document.createElement('div');
    element2.innerHTML = 'solved!';
    element2.className = className;
    document.body.appendChild(element2);
    class NodeTest1 {
        static test() {
            console.log("NodeTest1::test() being invoked");
            let test = typestyle_1.style.length;
            console.log(">>> style length is [" + test + "]");
            // let fpsMeter:FPSMeter = new FPSMeter();
            //let test:number = style.length;
        }
    }
    Main.NodeTest1 = NodeTest1;
    NodeTest1.test();
    // Example C ===================================================================================================
    const fpsMeter = new FPSMeter(undefined, {
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
    let options = fpsMeter.options;
    options.heat = 1;
    // Example D ===================================================================================================
    let test2 = math.abs(-7.5);
    console.log("Math abs is: [" + test2 + "]");
})(Main || (Main = {}));
// trying example ..
let v = new BABYLON.Vector2(2, 1);
console.log("Test-Vektor: [" + v.x + "]");
//MfgInit.init();
console.log("Test 1");
/*****************************************************************************
*   This is the application's point of entry.
*****************************************************************************/
window.onload = function () {
    console.log(">>>>> window.onload !!");
    //invoke main method
    src_1.Mfg.main();
};
/*****************************************************************************
*   This is the application's point of termination.
*****************************************************************************/
window.onunload = function () {
};
//# sourceMappingURL=index.js.map