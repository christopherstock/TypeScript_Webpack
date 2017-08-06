/*****************************************************************************
*   Offers static string functionality.
*
*   @author     Christopher Stock
*   @version    0.0.1
*****************************************************************************/
export declare class LibString {
    /*****************************************************************************
    *   Returns an array of all found regular expression matches.
    *
    *   @param  subject The target string to apply the regular expression search on.
    *   @param  regEx   The regular expression.
    *                   This string MUST NOT be enclosed in string quotes!
    *   @return         An array containing all matched results.
    *****************************************************************************/
    static searchRegEx(subject: string, regEx: RegExp): Array<string>;
}
