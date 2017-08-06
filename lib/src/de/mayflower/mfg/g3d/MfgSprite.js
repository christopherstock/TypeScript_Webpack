"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BABYLON = require("babylonjs");
const src_1 = require("../src");
/*****************************************************************************
*   Specifies the sprite system.
*
*   @author     Christopher Stock
*   @version    0.0.1
*****************************************************************************/
class MfgSprite {
    /*****************************************************************************
    *   Initializes the sprite manager.
    *****************************************************************************/
    static init() {
        MfgSprite.spriteManager = new BABYLON.SpriteManager("treesManager", src_1.MfgSettings.PATH_IMAGE_TEXTURE + "tree.png", 100, 357, src_1.MfgScene.scene);
    }
}
MfgSprite.spriteManager = null;
exports.MfgSprite = MfgSprite;
//# sourceMappingURL=MfgSprite.js.map