"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BABYLON = require("babylonjs");
const src_1 = require("../../src");
const lib_1 = require("../../../../../../src_lib/de/mayflower/lib/lib");
/*****************************************************************************
*   Specifies the 'first person' level.
*
*   @author     Christopher Stock
*   @version    0.0.1
*****************************************************************************/
class MfgLevelFirstPerson extends src_1.MfgLevel {
    /*****************************************************************************
    *   Sets up the 'bunny' level.
    *****************************************************************************/
    constructor() {
        super(new BABYLON.Vector3(-20.0, 0.0, -20.0), new BABYLON.Vector3(0.0, 0.0, 0.0), lib_1.LibUI.COLOR_ORANGE_MAYFLOWER);
        this.light1 = null;
        this.setupLights();
        this.setupGround();
        src_1.MfgInit.onInitCompleted();
    }
    /*****************************************************************************
    *   Sets up all lights.
    *****************************************************************************/
    setupLights() {
        //setup lights
        this.light1 = new BABYLON.DirectionalLight("dir01", new BABYLON.Vector3(0.0, -1.0, 0.0), src_1.MfgScene.scene);
        this.light1.intensity = 1.0;
        this.light1.position = new BABYLON.Vector3(0.0, 0.0, 0.0);
    }
    /*****************************************************************************
    *   Sets up the ground for the scene.
    *****************************************************************************/
    setupGround() {
        src_1.MfgSceneFactory.createBox("Ground1", new BABYLON.Vector3(0.0, 0.0, 0.0), 10.0, 0.5, 10.0, new BABYLON.Vector3(0.0, 0.0, 0.0), 0.0, src_1.MfgMaterial.materialTest1, src_1.MfgScene.scene);
        src_1.MfgSceneFactory.createBox("Ground2", new BABYLON.Vector3(10.0, 0.0, 0.0), 10.0, 0.5, 10.0, new BABYLON.Vector3(0.0, 0.0, 0.0), 0.0, src_1.MfgMaterial.materialTest1, src_1.MfgScene.scene);
        src_1.MfgSceneFactory.createBox("Ground3", new BABYLON.Vector3(0.0, 10.0, 0.0), 10.0, 0.5, 10.0, new BABYLON.Vector3(0.0, 0.0, 0.0), 0.0, src_1.MfgMaterial.materialTest1, src_1.MfgScene.scene);
        src_1.MfgSceneFactory.createBox("Ground4", new BABYLON.Vector3(0.0, 0.0, 10.0), 10.0, 0.5, 10.0, new BABYLON.Vector3(0.0, 0.0, 0.0), 0.0, src_1.MfgMaterial.materialTest1, src_1.MfgScene.scene);
        src_1.MfgSceneFactory.createBox("Ground5", new BABYLON.Vector3(-10.0, 0.0, 0.0), 10.0, 0.5, 10.0, new BABYLON.Vector3(0.0, 0.0, 0.0), 0.0, src_1.MfgMaterial.materialTest1, src_1.MfgScene.scene);
        src_1.MfgSceneFactory.createBox("Ground6", new BABYLON.Vector3(0.0, -10.0, 0.0), 10.0, 0.5, 10.0, new BABYLON.Vector3(0.0, 0.0, 0.0), 0.0, src_1.MfgMaterial.materialTest1, src_1.MfgScene.scene);
        src_1.MfgSceneFactory.createBox("Ground7", new BABYLON.Vector3(0.0, 0.0, -10.0), 10.0, 0.5, 10.0, new BABYLON.Vector3(0.0, 0.0, 0.0), 0.0, src_1.MfgMaterial.materialTest1, src_1.MfgScene.scene);
    }
}
exports.MfgLevelFirstPerson = MfgLevelFirstPerson;
//# sourceMappingURL=MfgLevelFirstPerson.js.map