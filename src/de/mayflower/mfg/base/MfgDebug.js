"use strict";
///<reference path="../../../../../src/de/mayflower/mfg/base/MfgSettings.ts"/>
///<reference path="../../../../../src/de/mayflower/mfg/base/MfgDebugSettings.ts"/>
///<reference path="../../../../../src_lib/de/mayflower/lib/util/LibDebug.ts"/>
exports.__esModule = true;
var MfgSettings = de.mayflower.mfg.MfgSettings;
var MfgDebugSettings = de.mayflower.mfg.MfgDebugSettings;
var LibDebug = de.mayflower.lib.LibDebug;
var de;
(function (de) {
    var mayflower;
    (function (mayflower) {
        var mfg;
        (function (mfg) {
            /*****************************************************************************
            *   The debug system, specifying switchable debug groups
            *   that generate output to the screen console.
            *
            *   @author     Christopher Stock
            *   @version    0.0.1
            *****************************************************************************/
            var MfgDebug = (function () {
                function MfgDebug() {
                }
                return MfgDebug;
            }());
            /** A primal debug group for general debug purposes. */
            MfgDebug.bugfix = new LibDebug(true && MfgSettings.MODE == MfgDebugSettings.MODE_DEBUG);
            /** The debug group for the startup acclaim message. */
            MfgDebug.acclaim = new LibDebug(true && MfgSettings.MODE == MfgDebugSettings.MODE_DEBUG);
            /** The debug group for the startup initialization messages. */
            MfgDebug.init = new LibDebug(true && MfgSettings.MODE == MfgDebugSettings.MODE_DEBUG);
            /** The debug group for the key system. */
            MfgDebug.key = new LibDebug(false && MfgSettings.MODE == MfgDebugSettings.MODE_DEBUG);
            /** The debug group for the image system. */
            MfgDebug.imageLoader = new LibDebug(false && MfgSettings.MODE == MfgDebugSettings.MODE_DEBUG);
            /** The debug group for the sound system. */
            MfgDebug.soundLoader = new LibDebug(false && MfgSettings.MODE == MfgDebugSettings.MODE_DEBUG);
            /** The debug group for the canvas3D system. */
            MfgDebug.canvas3D = new LibDebug(false && MfgSettings.MODE == MfgDebugSettings.MODE_DEBUG);
            /** The debug group for the text file loading system. */
            MfgDebug.textLoader = new LibDebug(false && MfgSettings.MODE == MfgDebugSettings.MODE_DEBUG);
            /** The debug group for the 3ds max .ase file parser. */
            MfgDebug.res3ds = new LibDebug(false && MfgSettings.MODE == MfgDebugSettings.MODE_DEBUG);
            mfg.MfgDebug = MfgDebug;
        })(mfg = mayflower.mfg || (mayflower.mfg = {}));
    })(mayflower = de.mayflower || (de.mayflower = {}));
})(de = exports.de || (exports.de = {}));
//# sourceMappingURL=MfgDebug.js.map