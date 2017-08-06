"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lib_1 = require("../../../../../src_lib/de/mayflower/lib/lib");
/*****************************************************************************
*   The debug system, specifying switchable debug groups
*   that generate output to the screen console.
*
*   @author     Christopher Stock
*   @version    0.0.1
*****************************************************************************/
class MfgDebug {
}
/** A primal debug group for general debug purposes. */
MfgDebug.bugfix = new lib_1.LibDebug(true);
/** The debug group for the startup acclaim message. */
MfgDebug.acclaim = new lib_1.LibDebug(true);
/** The debug group for the startup initialization messages. */
MfgDebug.init = new lib_1.LibDebug(true);
/** The debug group for the key system. */
MfgDebug.key = new lib_1.LibDebug(false);
/** The debug group for the image system. */
MfgDebug.imageLoader = new lib_1.LibDebug(false);
/** The debug group for the sound system. */
MfgDebug.soundLoader = new lib_1.LibDebug(false);
/** The debug group for the canvas3D system. */
MfgDebug.canvas3D = new lib_1.LibDebug(false);
/** The debug group for the text file loading system. */
MfgDebug.textLoader = new lib_1.LibDebug(false);
/** The debug group for the 3ds max .ase file parser. */
MfgDebug.res3ds = new lib_1.LibDebug(false);
exports.MfgDebug = MfgDebug;
//# sourceMappingURL=MfgDebug.js.map