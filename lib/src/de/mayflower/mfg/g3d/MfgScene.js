"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BABYLON = require("babylonjs");
const src_1 = require("../src");
/*****************************************************************************
*   Specifies the game scene.
*
*   @author     Christopher Stock
*   @version    0.0.1
*****************************************************************************/
class MfgScene {
    /*****************************************************************************
    *   Constructs and fills the scene.
    *****************************************************************************/
    static createScene() {
        //create scene
        MfgScene.scene = new BABYLON.Scene(src_1.MfgInit.engine);
    }
    /*****************************************************************************
    *   Being invoked when the scene is set up.
    *****************************************************************************/
    static initSceneCompleted() {
        src_1.MfgDebug.init.log("> Init scene completed");
        src_1.MfgInit.canvas.style.opacity = "1";
        //NOW hide the loading UI!
        src_1.MfgInit.engine.hideLoadingUI();
        //assign controls
        MfgScene.scene.activeCamera.attachControl(src_1.MfgInit.canvas);
        MfgScene.scene.onPointerDown = src_1.MfgPointer.assignPointerDown;
        //launch render loop ?? required ??
        src_1.MfgDebug.init.log("Starting the render loop.");
        src_1.MfgInit.engine.runRenderLoop(src_1.MfgGame.render);
    }
}
MfgScene.scene = null;
exports.MfgScene = MfgScene;
//# sourceMappingURL=MfgScene.js.map