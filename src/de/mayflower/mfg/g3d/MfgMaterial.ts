
    import * as BABYLON from 'babylonjs';

    import {MfgSettings, MfgScene} from '../src';

    /*****************************************************************************
    *   Specifies the game material.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *****************************************************************************/
    export class MfgMaterial
    {
        public          static              materialTest1           :BABYLON.StandardMaterial           = null;
        public          static              materialMFLogo          :BABYLON.StandardMaterial           = null;
        public          static              materialAmiga           :BABYLON.StandardMaterial           = null;
        public          static              materialGround          :BABYLON.StandardMaterial           = null;
        public          static              materialWood            :BABYLON.StandardMaterial           = null;
        public          static              materialGrass           :BABYLON.StandardMaterial           = null;
        public          static              materialGlass           :BABYLON.StandardMaterial           = null;

        /*****************************************************************************
        *   Inits all materials being used in the game.
        *****************************************************************************/
        public static initMaterials( scene:BABYLON.Scene )
        {
            MfgMaterial.materialTest1 = new BABYLON.StandardMaterial( "test", scene );
            var tex1:BABYLON.Texture = new BABYLON.Texture( MfgSettings.PATH_IMAGE_TEXTURE + "test1.jpg", scene );
            tex1.uScale = 10.0;
            tex1.vScale = 10.0;
            MfgMaterial.materialTest1.diffuseTexture = tex1;
            MfgMaterial.materialTest1.emissiveColor = new BABYLON.Color3( 1.0, 1.0, 1.0 );

            MfgMaterial.materialMFLogo = new BABYLON.StandardMaterial( "amiga", scene );
            var tex2:BABYLON.Texture = new BABYLON.Texture( MfgSettings.PATH_IMAGE_TEXTURE + "mfLogo.jpg", scene );
            tex2.uScale = 10.0;
            tex2.vScale = 10.0;
            MfgMaterial.materialMFLogo.diffuseTexture = tex2;
            MfgMaterial.materialMFLogo.emissiveColor = new BABYLON.Color3( 0.5, 0.5, 0.5 );
/*
            MfgMaterial.materialMFLogo.diffuseTexture.wrapU = 5.0;
            MfgMaterial.materialMFLogo.diffuseTexture.wrapV = 5.0;
*/
            MfgMaterial.materialAmiga = new BABYLON.StandardMaterial( "amiga", scene );
            MfgMaterial.materialAmiga.diffuseTexture = new BABYLON.Texture( MfgSettings.PATH_IMAGE_TEXTURE + "mosaic.jpg", scene );
            MfgMaterial.materialAmiga.emissiveColor = new BABYLON.Color3( 0.5, 0.5, 0.5 );

            MfgMaterial.materialGround = new BABYLON.StandardMaterial( "groundMat", scene );
            MfgMaterial.materialGround.diffuseColor = new BABYLON.Color3( 0.5, 0.5, 0.5 );
            MfgMaterial.materialGround.emissiveColor = new BABYLON.Color3( 0.2, 0.2, 0.2 );
            MfgMaterial.materialGround.backFaceCulling = false;

            MfgMaterial.materialWood = new BABYLON.StandardMaterial( "wood", MfgScene.scene );
            MfgMaterial.materialWood.diffuseTexture = new BABYLON.Texture( MfgSettings.PATH_IMAGE_TEXTURE + "wood.jpg", scene );
            MfgMaterial.materialWood.emissiveColor = new BABYLON.Color3( 0.5, 0.5, 0.5 );

            MfgMaterial.materialGrass = new BABYLON.StandardMaterial( "grass", scene );
            MfgMaterial.materialGrass.diffuseTexture = new BABYLON.Texture( MfgSettings.PATH_IMAGE_TEXTURE + "grass.jpg", scene );
            MfgMaterial.materialGrass.diffuseTexture.wrapU = 5.0;      //Repeat 5 times on the Vertical Axes
            MfgMaterial.materialGrass.diffuseTexture.wrapV = 5.0;      //Repeat 5 times on the Horizontal Axes
            MfgMaterial.materialGrass.backFaceCulling = false;          //Always show the front and the back of an element

            MfgMaterial.materialGlass = new BABYLON.StandardMaterial( "glass", scene );
            MfgMaterial.materialGlass.diffuseTexture = new BABYLON.Texture( MfgSettings.PATH_IMAGE_TEXTURE + "glass.jpg", scene );
          //MfgMaterial.materialGlass.diffuseColor   = new BABYLON.Color3( 1, 0, 0 ); //Red
            MfgMaterial.materialGlass.alpha = 0.5;
        }
    }
