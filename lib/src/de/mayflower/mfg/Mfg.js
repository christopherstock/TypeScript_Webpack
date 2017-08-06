"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const src_1 = require("./src");
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
class Mfg {
    /*****************************************************************************
    *   This method is invoked when the application starts.
    *****************************************************************************/
    static main() {
        console.log(">> main() ... :D ");
        //init game engine
        src_1.MfgInit.init();
    }
}
exports.Mfg = Mfg;
//# sourceMappingURL=Mfg.js.map