"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BABYLON = require("babylonjs");
const src_1 = require("../src");
const src_2 = require("../src");
const src_3 = require("../src");
const src_4 = require("../src");
const src_5 = require("../src");
const src_6 = require("../src");
const src_7 = require("../src");
/*****************************************************************************
*   Specifies the initialization part of the game logic.
*
*   @author     Christopher Stock
*   @version    0.0.1
*****************************************************************************/
class MfgInit {
    /*****************************************************************************
    *   Inits this app from scratch.
    *****************************************************************************/
    static init() {
        console.log("test");
        // MfgDebug.init.log( "Acclaiming and setting title." );
        //acclaim debug console
        src_1.MfgDebug.acclaim.log(src_2.MfgSettings.TITLE);
        //set document title
        document.title = src_2.MfgSettings.TITLE;
        //reference canvas element and fps counter div
        MfgInit.canvas = document.getElementById("renderCanvas");
        MfgInit.divFps = document.getElementById("fps");
        //setup canvas size
        MfgInit.canvas.width = src_2.MfgSettings.CANVAS_WIDTH;
        MfgInit.canvas.height = src_2.MfgSettings.CANVAS_HEIGHT;
        //init Babylon.js engine
        src_1.MfgDebug.init.log("Initializing the BABYLON engine.");
        MfgInit.engine = new BABYLON.Engine(MfgInit.canvas, true);
        //add resize event listener
        window.addEventListener("resize", function () {
            MfgInit.engine.resize();
        });
        src_1.MfgDebug.init.log("Displaying the loading UI");
        MfgInit.engine.displayLoadingUI();
        //create the scene
        src_1.MfgDebug.init.log("Creating the Scene");
        src_4.MfgScene.createScene();
        //init materials
        src_1.MfgDebug.init.log("Init all materials");
        src_5.MfgMaterial.initMaterials(src_4.MfgScene.scene);
        //init sprite manager
        src_1.MfgDebug.init.log("Init the sprite manager");
        src_3.MfgSprite.init();
        //setup physics
        src_1.MfgDebug.init.log("Setup all physics");
        src_4.MfgScene.scene.enablePhysics(null, new BABYLON.CannonJSPlugin());
        //setup the level
        src_1.MfgDebug.init.log("Setup the level");
        src_6.MfgLevel.currentLevel = new src_7.MfgLevelBunny();
    }
    /*****************************************************************************
    *   Being invoked when all items are initialized and loaded.
    *****************************************************************************/
    static onInitCompleted() {
        src_1.MfgDebug.init.log("> onInitCompleted");
        src_4.MfgScene.scene.executeWhenReady(src_4.MfgScene.initSceneCompleted);
    }
}
/*****************************************************************************
*   The WebGL canvas context.
*****************************************************************************/
MfgInit.canvas = null;
/*****************************************************************************
*   The DIV containing the FPS information.
*****************************************************************************/
MfgInit.divFps = null;
/*****************************************************************************
*   The WebGL canvas context.
*****************************************************************************/
MfgInit.engine = null;
exports.MfgInit = MfgInit;
//# sourceMappingURL=MfgInit.js.map