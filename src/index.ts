

    // Example A =======================================================================================================

    console.log("Chris and Carsten here! TEST !");

    function component () {

        let element = document.createElement('div');
        element.innerHTML = 'Welcome to our TypeScript test!';
        return element;
    }
    document.body.appendChild( component() );


    // Example B =======================================================================================================

    import { style } from 'typestyle';

    /** convert a style object to a CSS class name */
    const className = style({color: 'red', fontSize: '20px'});

    console.log("Testing import of 'typestyle':");

    console.log("Classname is: [" + className + "]");

    let element2 = document.createElement('div');
    element2.innerHTML = 'Carsten';
    element2.className = className;

    document.body.appendChild(element2);

    class NodeTest1
    {
        public static test()
        {
            console.log("NodeTest1::test() being invoked");

            let test:number = style.length;
            console.log(">>> style length is [" + test + "]");


            // let fpsMeter:FPSMeter = new FPSMeter();

            //let test:number = style.length;


        }
    }

    NodeTest1.test();


    // Example C =======================================================================================================





    // .. is not a module. ????
    // import FPSMeter from 'FPSMeter';
    // import FPSMeter = require('FPSMeter');








    //import _ from 'lodash';
    // import { debounce } from "lodash";
    // import * as debouce from 'lodash/debounce';


