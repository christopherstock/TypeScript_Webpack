
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
