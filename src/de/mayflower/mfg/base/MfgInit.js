"use strict";
exports.__esModule = true;
var de_mayflower_mfg_mfginit;
(function (de_mayflower_mfg_mfginit) {
    /*****************************************************************************
    *   Specifies the initialization part of the game logic.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *****************************************************************************/
    var MfgInit = (function () {
        function MfgInit() {
        }
        /*****************************************************************************
        *   Inits this app from scratch.
        *****************************************************************************/
        MfgInit.init = function () {
            console.log("test");
            // MfgDebug.init.log( "Acclaiming and setting title." );
            /*
                        //acclaim debug console
                        MfgDebug.acclaim.log( MfgSettings.TITLE );
            
                        //set document title
                        document.title = MfgSettings.TITLE;
            
                        //reference canvas element and fps counter div
                        MfgInit.canvas = <HTMLCanvasElement>document.getElementById( "renderCanvas" );
                        MfgInit.divFps = <HTMLDivElement>   document.getElementById( "fps"          );
            
                        //setup canvas size
                        MfgInit.canvas.width  = MfgSettings.CANVAS_WIDTH;
                        MfgInit.canvas.height = MfgSettings.CANVAS_HEIGHT;
            
                        //init Babylon.js engine
                        MfgDebug.init.log( "Initializing the BABYLON engine." );
                        MfgInit.engine = new BABYLON.Engine( MfgInit.canvas, true );
            
                        //add resize event listener
                        window.addEventListener(
                            "resize",
                            function () {
                                MfgInit.engine.resize();
                            }
                        );
            
                        MfgDebug.init.log( "Displaying the loading UI" );
                        MfgInit.engine.displayLoadingUI();
            
                        //create the scene
                        MfgDebug.init.log( "Creating the Scene" );
                        MfgScene.createScene();
            
                        //init materials
                        MfgDebug.init.log( "Init all materials" );
                        MfgMaterial.initMaterials( MfgScene.scene );
            
                        //init sprite manager
                        MfgDebug.init.log( "Init the sprite manager" );
                        MfgSprite.init();
            
                        //setup physics
                        MfgDebug.init.log( "Setup all physics" );
                        MfgScene.scene.enablePhysics( null, new BABYLON.OimoJSPlugin() );
            
                        //setup the level
                        MfgDebug.init.log( "Setup the level" );
                        MfgGame.currentLevel = new MfgLevelFirstPerson();
            */
        };
        /*****************************************************************************
        *   Being invoked when all items are initialized and loaded.
        *****************************************************************************/
        MfgInit.onInitCompleted = function () {
            /*
                        MfgDebug.init.log( "> onInitCompleted" );
            
                        MfgScene.scene.executeWhenReady
                        (
                            MfgScene.initSceneCompleted
                        );
            */
        };
        return MfgInit;
    }());
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
    de_mayflower_mfg_mfginit.MfgInit = MfgInit;
})(de_mayflower_mfg_mfginit = exports.de_mayflower_mfg_mfginit || (exports.de_mayflower_mfg_mfginit = {}));
//# sourceMappingURL=MfgInit.js.map