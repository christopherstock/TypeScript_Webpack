import * as BABYLON from 'babylonjs';
/*****************************************************************************
*   Specifies the game scene.
*
*   @author     Christopher Stock
*   @version    0.0.1
*****************************************************************************/
export declare class MfgScene {
    static scene: BABYLON.Scene;
    /*****************************************************************************
    *   Constructs and fills the scene.
    *****************************************************************************/
    static createScene(): void;
    /*****************************************************************************
    *   Being invoked when the scene is set up.
    *****************************************************************************/
    static initSceneCompleted(): void;
}
