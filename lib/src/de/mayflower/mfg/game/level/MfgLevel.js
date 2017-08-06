"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BABYLON = require("babylonjs");
const src_1 = require("../../src");
/*****************************************************************************
*   Handles different level sets.
*
*   @author     Christopher Stock
*   @version    0.0.1
*****************************************************************************/
class MfgLevel {
    constructor(cameraStartup, cameraTarget, clearColor) {
        src_1.MfgCamera.init(cameraStartup, cameraTarget);
        src_1.MfgScene.scene.clearColor = clearColor;
        src_1.MfgScene.scene.gravity = new BABYLON.Vector3(0, src_1.MfgSettings.GRAVITY, 0);
    }
}
exports.MfgLevel = MfgLevel;
//# sourceMappingURL=MfgLevel.js.map