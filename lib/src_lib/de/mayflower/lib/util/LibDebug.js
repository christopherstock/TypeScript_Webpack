"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lib_1 = require("./../lib");
/*****************************************************************************
*   Represents a debug group whose logging can be enabled or disabled.
*
*   @author     Christopher Stock
*   @version    0.0.1
*****************************************************************************/
class LibDebug {
    /*****************************************************************************
    *   Constructs a new debug group.
    *
    *   @param  debugEnabled    Flags if this debug group should log messages.
    *****************************************************************************/
    constructor(debugEnabled) {
        /** The flag that enables or disables logging for this debug group. */
        this.debugEnabled = false;
        this.debugEnabled = debugEnabled;
    }
    /*****************************************************************************
    *   Logs a line of output to the default console. Will only generate output
    *   if the debug for this debug group is enabled.
    *
    *   @param msg The message to log to the default console.
    *****************************************************************************/
    log(msg) {
        if (this.debugEnabled) {
            console.log('[' + lib_1.LibStringFormat.getDateTimeString() + '] ' + msg);
        }
    }
}
exports.LibDebug = LibDebug;
//# sourceMappingURL=LibDebug.js.map