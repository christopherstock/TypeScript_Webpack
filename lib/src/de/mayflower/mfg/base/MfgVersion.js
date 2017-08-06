"use strict";
///<reference path="../../../../../src_lib/de/mayflower/lib/util/LibVersion.ts"/>
Object.defineProperty(exports, "__esModule", { value: true });
var LibVersion = de.mayflower.lib.LibVersion;
var de;
(function (de) {
    var mayflower;
    (function (mayflower) {
        var mfg;
        (function (mfg) {
            /**************************************************************************************
            *   Contains the project history with all current and completed version information.
            *
            *   @author     Christopher Stock
            *   @version    0.0.1
            **************************************************************************************/
            class MfgVersion {
            }
            /** The project's version v.0.0.1. */
            MfgVersion.V_0_0_1 = new LibVersion("0.0.1", "BASE", "12.02.2016 00:07:34", "");
            /** The project's current version. */
            MfgVersion.CURRENT_VERSION = MfgVersion.V_0_0_1;
            mfg.MfgVersion = MfgVersion;
        })(mfg = mayflower.mfg || (mayflower.mfg = {}));
    })(mayflower = de.mayflower || (de.mayflower = {}));
})(de = exports.de || (exports.de = {}));
//# sourceMappingURL=MfgVersion.js.map