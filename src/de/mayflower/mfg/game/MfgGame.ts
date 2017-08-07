
    import {MfgInit, MfgScene} from '../src';

    /*****************************************************************************
    *   Specifies the paramount part of the game logic.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *****************************************************************************/
    export class MfgGame
    {
        /*****************************************************************************
        *   The render loop. This method is being invoked each tick.
        *****************************************************************************/
        public static render()
        {
            //assign FPS info
            MfgInit.divFps.innerHTML = MfgInit.engine.getFps().toFixed() + " fps";

            //render the scene if existent
            if ( MfgScene.scene )
            {
                //render the scene
                MfgScene.scene.render();

                //handle streams
                if ( MfgScene.scene.useDelayedTextureLoading )
                {
                    var waiting = MfgScene.scene.getWaitingItemsCount();
                    if ( waiting > 0 )
                    {
                        console.log( "Streaming items... " + waiting + " remaining");
                    }
                }
            }
        }
    }
