"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*****************************************************************************
*   Formats strings in a specified way.
*
*   @author     Christopher Stock
*   @version    0.0.1
*****************************************************************************/
class LibStringFormat {
    /*****************************************************************************
    *   Returns a formatted timestamp of the current system date and time.
    *
    *   @return A formatted timestamp of the current system date and time.
    *****************************************************************************/
    static getDateTimeString() {
        var now = new Date();
        var year = (now.getFullYear()).toString();
        var month = (now.getMonth() + 1).toString();
        var day = (now.getDate()).toString();
        var hour = (now.getHours()).toString();
        var minute = (now.getMinutes()).toString();
        var second = (now.getSeconds()).toString();
        if (month.toString().length == 1)
            month = '0' + month;
        if (day.toString().length == 1)
            day = '0' + day;
        if (hour.toString().length == 1)
            hour = '0' + hour;
        if (minute.toString().length == 1)
            minute = '0' + minute;
        if (second.toString().length == 1)
            second = '0' + second;
        return (day + '.' + month + '.' + year + ' ' + hour + ':' + minute + ':' + second);
    }
}
exports.LibStringFormat = LibStringFormat;
//# sourceMappingURL=LibStringFormat.js.map