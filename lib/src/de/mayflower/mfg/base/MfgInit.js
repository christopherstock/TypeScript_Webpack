"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BABYLON = require("babylonjs");
const src_1 = require("../src");
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
        src_1.MfgDebug.acclaim.log(src_1.MfgSettings.TITLE);
        //set document title
        document.title = src_1.MfgSettings.TITLE;
        //reference canvas element and fps counter div
        MfgInit.canvas = document.getElementById("renderCanvas");
        MfgInit.divFps = document.getElementById("fps");
        //setup canvas size
        MfgInit.canvas.width = src_1.MfgSettings.CANVAS_WIDTH;
        MfgInit.canvas.height = src_1.MfgSettings.CANVAS_HEIGHT;
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
        src_1.MfgScene.createScene();
        //init materials
        src_1.MfgDebug.init.log("Init all materials");
        src_1.MfgMaterial.initMaterials(src_1.MfgScene.scene);
        //init sprite manager
        src_1.MfgDebug.init.log("Init the sprite manager");
        src_1.MfgSprite.init();
        //setup physics
        src_1.MfgDebug.init.log("Setup all physics");
        src_1.MfgScene.scene.enablePhysics(null, new BABYLON.OimoJSPlugin());
        //setup the level
        src_1.MfgDebug.init.log("Setup the level");
        src_1.MfgGame.currentLevel = new src_1.MfgLevelFirstPerson();
    }
    /*****************************************************************************
    *   Being invoked when all items are initialized and loaded.
    *****************************************************************************/
    static onInitCompleted() {
        src_1.MfgDebug.init.log("> onInitCompleted");
        src_1.MfgScene.scene.executeWhenReady(src_1.MfgScene.initSceneCompleted);
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