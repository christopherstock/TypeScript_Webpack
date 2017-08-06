
    import {MfgInit} from './src';

    /************************************************************************************
    *   The main class contains the application's points of entry and termination.
    *
    *   TODO ASAP   Improve namespaces (like java packages!)
    *   TODO ASAP   Create simple test level.
    *   TODO ASAP   Change build system to npm instead of PhpStorm compiler.
    *   TODO ASAP   Create abstract level system.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *****************************************************************************/
    export class Mfg
    {
        /*****************************************************************************
        *   This method is invoked when the application starts.
        *****************************************************************************/
        public static main():void
        {
            console.log(">> main() ... :D ");

            //init game engine
            MfgInit.init();
        }
    }
