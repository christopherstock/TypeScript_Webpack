import * as BABYLON from 'babylonjs';
/*****************************************************************************
*   Specifies the paramount part of the game logic.
*
*   @author     Christopher Stock
*   @version    0.0.1
*****************************************************************************/
export declare class MfgCamera {
    static camera: BABYLON.FreeCamera;
    /*****************************************************************************
    *   Sets up the scene camera.
    *
    *   @param  startupPosition     The camera startup position.
    *   @param  startupTarget       The camera startup target.
    *****************************************************************************/
    static init(startupPosition: BABYLON.Vector3, startupTarget: BABYLON.Vector3): void;
}
