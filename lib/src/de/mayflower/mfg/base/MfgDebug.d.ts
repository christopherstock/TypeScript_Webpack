import { LibDebug } from '../../../../../src_lib/de/mayflower/lib/lib';
/*****************************************************************************
*   The debug system, specifying switchable debug groups
*   that generate output to the screen console.
*
*   @author     Christopher Stock
*   @version    0.0.1
*****************************************************************************/
export declare class MfgDebug {
    /** A primal debug group for general debug purposes. */
    static bugfix: LibDebug;
    /** The debug group for the startup acclaim message. */
    static acclaim: LibDebug;
    /** The debug group for the startup initialization messages. */
    static init: LibDebug;
    /** The debug group for the key system. */
    static key: LibDebug;
    /** The debug group for the image system. */
    static imageLoader: LibDebug;
    /** The debug group for the sound system. */
    static soundLoader: LibDebug;
    /** The debug group for the canvas3D system. */
    static canvas3D: LibDebug;
    /** The debug group for the text file loading system. */
    static textLoader: LibDebug;
    /** The debug group for the 3ds max .ase file parser. */
    static res3ds: LibDebug;
}
