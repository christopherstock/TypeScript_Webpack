"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const src_1 = require("../src");
/*****************************************************************************
*   Specifies the paramount part of the game logic.
*
*   @author     Christopher Stock
*   @version    0.0.1
*****************************************************************************/
class MfgGame {
    /*****************************************************************************
    *   The render loop. This method is being invoked each tick.
    *****************************************************************************/
    static render() {
        //assign FPS info
        src_1.MfgInit.divFps.innerHTML = src_1.MfgInit.engine.getFps().toFixed() + " fps";
        //render the scene if existent
        if (src_1.MfgScene.scene) {
            //render the scene
            src_1.MfgScene.scene.render();
            //handle streams
            if (src_1.MfgScene.scene.useDelayedTextureLoading) {
                var waiting = src_1.MfgScene.scene.getWaitingItemsCount();
                if (waiting > 0) {
                    console.log("Streaming items... " + waiting + " remaining");
                }
            }
        }
    }
}
MfgGame.currentLevel = null;
exports.MfgGame = MfgGame;
//# sourceMappingURL=MfgGame.js.map