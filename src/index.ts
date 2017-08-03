
    // namespace MyTest
    //{
        // Example A =======================================================================================================

        console.log("Chris and Carsten here! TEST 2 !");

        export function component () {

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
        element2.innerHTML = 'Carsten und Christopher';
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


        // Example C =======================================================================================================

         import 'fpsmeter';

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


        // Example D =======================================================================================================

        import * as math from 'mathjs';

        let test2:number = math.abs(-7.5);
        console.log("Math abs is: [" + test2 + "]");
    //}
