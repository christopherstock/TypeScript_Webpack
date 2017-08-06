import * as BABYLON from 'babylonjs';
/*****************************************************************************
*   Specifies the game material.
*
*   @author     Christopher Stock
*   @version    0.0.1
*****************************************************************************/
export declare class MfgMaterial {
    static materialTest1: BABYLON.StandardMaterial;
    static materialMFLogo: BABYLON.StandardMaterial;
    static materialAmiga: BABYLON.StandardMaterial;
    static materialGround: BABYLON.StandardMaterial;
    static materialWood: BABYLON.StandardMaterial;
    static materialGrass: BABYLON.StandardMaterial;
    static materialGlass: BABYLON.StandardMaterial;
    /*****************************************************************************
    *   Inits all materials being used in the game.
    *****************************************************************************/
    static initMaterials(scene: BABYLON.Scene): void;
}
