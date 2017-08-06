"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const src_1 = require("../src");
/*****************************************************************************
*   Pointer controls.
*
*   @author     Christopher Stock
*   @version    0.0.1
*****************************************************************************/
class MfgPointer {
    static assignPointerDown(evt, pickResult) {
        if (pickResult.hit) {
            var dir = pickResult.pickedPoint.subtract(src_1.MfgScene.scene.activeCamera.position);
            dir.normalize();
            pickResult.pickedMesh.applyImpulse(dir.scale(10), pickResult.pickedPoint);
        }
    }
}
exports.MfgPointer = MfgPointer;
//# sourceMappingURL=MfgPointer.js.map