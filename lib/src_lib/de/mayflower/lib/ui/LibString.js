"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*****************************************************************************
*   Offers static string functionality.
*
*   @author     Christopher Stock
*   @version    0.0.1
*****************************************************************************/
class LibString {
    /*****************************************************************************
    *   Returns an array of all found regular expression matches.
    *
    *   @param  subject The target string to apply the regular expression search on.
    *   @param  regEx   The regular expression.
    *                   This string MUST NOT be enclosed in string quotes!
    *   @return         An array containing all matched results.
    *****************************************************************************/
    static searchRegEx(subject, regEx) {
        var results = subject.match(regEx);
        var ret = [];
        if (results != null) {
            for (var i = 0; i < results.length; ++i) {
                ret[i] = results[i];
            }
        }
        return ret;
    }
}
exports.LibString = LibString;
//# sourceMappingURL=LibString.js.map