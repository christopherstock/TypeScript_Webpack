/*****************************************************************************
*   Specifies all adjustments and balancings for the application.
*
*   @author     Christopher Stock
*   @version    0.0.1
*****************************************************************************/
export declare class MfgSettings {
    /** Determines the app's operation mode. */
    static MODE: number;
    /** The application's internal name. */
    static TITLE: string;
    /** The desired canvas3D width. */
    static CANVAS_WIDTH: number;
    /** The desired canvas3D height. */
    static CANVAS_HEIGHT: number;
    /** The scene's gravity. */
    static GRAVITY: number;
    /** The relative path from index.html where all images the app makes use of reside. */
    static PATH_IMAGE_TEXTURE: string;
    /** The relative path from index.html where all sounds the app makes use of reside. */
    static PATH_SOUND: string;
    /** The relative path from index.html where all 3d model files the app makes use of reside. */
    static PATH_3DS: string;
    /** The player's x and z dimension (radius). */
    static PLAYER_SIZE_XZ: number;
    /** The player's y dimension (height). */
    static PLAYER_SIZE_Y: number;
    /** The player's speed in world coordinate per tick. */
    static PLAYER_SPEED_MOVE: number;
    /** The player's turning speed in degrees per tick. */
    static PLAYER_SPEED_TURN: number;
    /** The player's looking up/down speed in degrees per tick. */
    static PLAYER_SPEED_LOOK_UP_DOWN: number;
    /** The player's maximum looking up/down in degrees. */
    static PLAYER_MAX_LOOK_UP_DOWN: number;
    /** The player's speed for centering the up/down view aim in degrees per tick. */
    static PLAYER_SPEED_CENTER_VIEW_AIM: number;
}
