"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BABYLON = require("babylonjs");
const src_1 = require("../src");
/*****************************************************************************
*   Specifies the paramount part of the game logic.
*
*   @author     Christopher Stock
*   @version    0.0.1
*****************************************************************************/
class MfgCamera {
    /*****************************************************************************
    *   Sets up the scene camera.
    *
    *   @param  startupPosition     The camera startup position.
    *   @param  startupTarget       The camera startup target.
    *****************************************************************************/
    static init(startupPosition, startupTarget) {
        MfgCamera.camera = new BABYLON.FreeCamera("Camera", startupPosition, src_1.MfgScene.scene);
        MfgCamera.camera.setTarget(startupTarget);
        MfgCamera.camera.checkCollisions = true;
        MfgCamera.camera.applyGravity = true;
        //Set the ellipsoid around the camera (e.g. your player's size)
        MfgCamera.camera.ellipsoid = new BABYLON.Vector3(src_1.MfgSettings.PLAYER_SIZE_XZ, src_1.MfgSettings.PLAYER_SIZE_Y, src_1.MfgSettings.PLAYER_SIZE_XZ);
    }
}
MfgCamera.camera = null;
exports.MfgCamera = MfgCamera;
//# sourceMappingURL=MfgCamera.js.map