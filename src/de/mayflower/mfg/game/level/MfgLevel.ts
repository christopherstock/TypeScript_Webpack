
    import * as BABYLON from 'babylonjs';
    import {MfgCamera, MfgScene, MfgSettings} from '../../src';

    /*****************************************************************************
    *   Handles different level sets.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *****************************************************************************/
    export class MfgLevel
    {
        public          static          currentLevel            :MfgLevel               = null;

        constructor( cameraStartup:BABYLON.Vector3, cameraTarget:BABYLON.Vector3, clearColor:BABYLON.Color4 )
        {
            MfgCamera.init( cameraStartup, cameraTarget );

            MfgScene.scene.clearColor = clearColor;
            MfgScene.scene.gravity    = new BABYLON.Vector3( 0, MfgSettings.GRAVITY, 0 );
        }
    }
