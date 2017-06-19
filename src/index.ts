
    // Example A =======================================================================================================

    import _ from 'lodash';

    // test
    alert("index.ts being invoked");
    console.log("index.ts being invoked");

    // test function

    function component () {

        let element = document.createElement('div');

        // Lodash, currently included via a script, is required for this line to work
        element.innerHTML = _.join(['Hello', 'webpack'], ' ');

        return element;
    }

    document.body.appendChild( component() );



    // Example B =======================================================================================================

    import { style } from 'typestyle';

    // impossible via node ?
    //window.alert("The going is much more than trying from this point!");

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
