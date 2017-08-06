"use strict";
exports.__esModule = true;
var de;
(function (de) {
    var mayflower;
    (function (mayflower) {
        var mfg;
        (function (mfg) {
            /*****************************************************************************
            *   Specifies all debug adjustments for the application.
            *
            *   @author     Christopher Stock
            *   @version    0.0.1
            *****************************************************************************/
            var MfgDebugSettings = (function () {
                function MfgDebugSettings() {
                }
                return MfgDebugSettings;
            }());
            /** The debug constant that represents the 'RELEASE'-mode. */
            MfgDebugSettings.MODE_RELEASE = 0;
            /** The debug constant that represents the 'DEBUG'-mode. */
            MfgDebugSettings.MODE_DEBUG = 1;
            /** Disables all sounds. */
            MfgDebugSettings.DEBUG_DISABLE_SOUNDS = true;
            mfg.MfgDebugSettings = MfgDebugSettings;
        })(mfg = mayflower.mfg || (mayflower.mfg = {}));
    })(mayflower = de.mayflower || (de.mayflower = {}));
})(de = exports.de || (exports.de = {}));
//# sourceMappingURL=MfgDebugSettings.js.map