"use strict";
// .. is not a module. ????
// import FPSMeter from 'FPSMeter';
// import FPSMeter = require('FPSMeter');
console.log("Chris and Carsten here! TEST !");
// Example A =======================================================================================================
//import _ from 'lodash';
// import { debounce } from "lodash";
// import * as debouce from 'lodash/debounce';
function component() {
    var element = document.createElement('div');
    element.innerHTML = 'Welcome to our next TypeScript test.';
    return element;
    // Lodash, currently included via a script, is required for this line to work
    //_.join(['Hello', 'webpack'], ' ');
}
document.body.appendChild(component());
/*

    // Example B =======================================================================================================

    import { style } from 'typestyle';



    console.log("index.ts being invoked");

    class NodeTest1
    {
        public static test()
        {
            console.log("NodeTest1::test() being invoked");

            // let fpsMeter:FPSMeter = new FPSMeter();

            let test:number = style.length;

            console.log("style length is [" + test + "]");
        }
    }

    NodeTest1.test();
*/
//# sourceMappingURL=index.js.map