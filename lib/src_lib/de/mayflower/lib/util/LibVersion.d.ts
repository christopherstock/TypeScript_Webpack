/*****************************************************************************
*   Represents one specific project version.
*
*   @author     Christopher Stock
*   @version    0.0.1
*****************************************************************************/
export declare class LibVersion {
    /** Version's specifier. */
    private version;
    /** Version's internal codename. */
    private codename;
    /** Version's completion date. */
    private date;
    /** Version's changelog. */
    private log;
    /*****************************************************************************
    *   Creates a project version.
    *
    *   @param version     The version specifier.
    *   @param codename    The internal codename.
    *   @param date        The completion date.
    *   @param log         The changelog.
    *****************************************************************************/
    constructor(version: string, codename: string, date: string, log: string);
    /**************************************************************************************
    *   Delivers all information of this version.
    *
    *   @return A representation of the current project's version with it's timestamp.
    **************************************************************************************/
    getVersionDescriptor(): string;
}
