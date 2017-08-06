import * as BABYLON from 'babylonjs';
/*****************************************************************************
*   Constructs scene objects.
*
*   @author     Christopher Stock
*   @version    0.0.1
*****************************************************************************/
export declare class MfgSceneFactory {
    /*****************************************************************************
    *   Creates a box.
    *****************************************************************************/
    static createBox(id: string, position: BABYLON.Vector3, width: number, height: number, depth: number, rotationAxis: BABYLON.Vector3, rotationAmount: number, material: BABYLON.Material, scene: BABYLON.Scene): BABYLON.Mesh;
    /*****************************************************************************
    *   Creates a box the OLD style.
    *****************************************************************************/
    static createOldBox(id: string, position: BABYLON.Vector3, scaling: BABYLON.Vector3, rotationAxis: BABYLON.Vector3, rotationAmount: number, material: BABYLON.Material, scene: BABYLON.Scene): BABYLON.Mesh;
}
