import * as BABYLON from 'babylonjs';
/*****************************************************************************
*   Handles different level sets.
*
*   @author     Christopher Stock
*   @version    0.0.1
*****************************************************************************/
export declare class MfgLevel {
    static currentLevel: MfgLevel;
    constructor(cameraStartup: BABYLON.Vector3, cameraTarget: BABYLON.Vector3, clearColor: BABYLON.Color4);
}
