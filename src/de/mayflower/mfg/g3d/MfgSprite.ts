import * as BABYLON from 'babylonjs';

export namespace de.mayflower.mfg
{
    /*****************************************************************************
    *   Specifies the sprite system.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *****************************************************************************/
    export class MfgSprite
    {
        public          static                  spriteManager           :BABYLON.SpriteManager      = null;

        /*****************************************************************************
        *   Initializes the sprite manager.
        *****************************************************************************/
        public static init()
        {
            MfgSprite.spriteManager = new BABYLON.SpriteManager( "treesManager", MfgSettings.PATH_IMAGE_TEXTURE + "tree.png", 100, 357, MfgScene.scene );
        }
    }
}
