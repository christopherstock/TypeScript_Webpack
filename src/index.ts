
    import { style } from 'typestyle';
    import 'fpsmeter';
    import * as math from 'mathjs';

    import * as BABYLON from 'babylonjs';

    import {de_mayflower_mfg_mfg} from './de/mayflower/mfg/test';
    import {de_mayflower_mfg_mfginit} from './de/mayflower/mfg/test';

    // import {MfgVersion} from './de/mayflower/mfg/base/MfgVersion';

    console.log("Welcome!! 7");

    console.dir(de_mayflower_mfg_mfg);
    console.dir(de_mayflower_mfg_mfginit);



    namespace Main
    {
        // Example A ===================================================================================================

        console.log("Chris and Carsten here!");

        export function component () {

            let element = document.createElement('div');
            element.innerHTML = 'Welcome to our TypeScript test!';
            return element;
        }
        document.body.appendChild( component() );


        // Example B ===================================================================================================

        const className = style({color: 'red', fontSize: '20px'});

        console.log("Testing import of 'typestyle':");

        console.log("Classname is: [" + className + "]");

        let element2 = document.createElement('div');
        element2.innerHTML = 'Carsten und Christopher - solved it all! :D :D';
        element2.className = className;

        document.body.appendChild(element2);

        export class NodeTest1
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


        // Example C ===================================================================================================

        const fpsMeter = new FPSMeter(
            undefined,
            {
                graph:    1,
                decimals: 1,
                position: "absolute",
                zIndex:   10,
                right:    "5px",
                top:      "auto",
                left:     "auto",
                bottom:   "5px",
                margin:   "0",
                heat:     0
            }
        );

        let options:FPSMeterOptions = fpsMeter.options;
        options.heat = 1;


        // Example D ===================================================================================================

        let test2:number = math.abs(-7.5);
        console.log("Math abs is: [" + test2 + "]");
    }

    // trying example ..

    let v:BABYLON.Vector2 = new BABYLON.Vector2(2, 1);

    console.log( "Test-Vektor: [" + v.x + "]" );



    //MfgInit.init();

console.log("Test 1");

/*****************************************************************************
*   This is the application's point of entry.
*****************************************************************************/
window.onload = function()
{
    console.log(">>>>> window.onload !!");

    //invoke main method
    de_mayflower_mfg_mfg.Mfg.main();
};

/*****************************************************************************
*   This is the application's point of termination.
*****************************************************************************/
window.onunload = function()
{
};
