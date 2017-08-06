"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BABYLON = require("babylonjs");
const src_1 = require("../src");
/*****************************************************************************
*   Specifies the game material.
*
*   @author     Christopher Stock
*   @version    0.0.1
*****************************************************************************/
class MfgMaterial {
    /*****************************************************************************
    *   Inits all materials being used in the game.
    *****************************************************************************/
    static initMaterials(scene) {
        MfgMaterial.materialTest1 = new BABYLON.StandardMaterial("test", scene);
        MfgMaterial.materialTest1.diffuseTexture = new BABYLON.Texture(src_1.MfgSettings.PATH_IMAGE_TEXTURE + "test1.jpg", scene);
        MfgMaterial.materialTest1.emissiveColor = new BABYLON.Color3(1.0, 1.0, 1.0);
        MfgMaterial.materialTest1.diffuseTexture.uScale = 1;
        MfgMaterial.materialTest1.diffuseTexture.vScale = 1;
        MfgMaterial.materialMFLogo = new BABYLON.StandardMaterial("amiga", scene);
        MfgMaterial.materialMFLogo.diffuseTexture = new BABYLON.Texture(src_1.MfgSettings.PATH_IMAGE_TEXTURE + "mfLogo.jpg", scene);
        MfgMaterial.materialMFLogo.emissiveColor = new BABYLON.Color3(0.5, 0.5, 0.5);
        MfgMaterial.materialMFLogo.diffuseTexture.uScale = 5;
        MfgMaterial.materialMFLogo.diffuseTexture.vScale = 5;
        MfgMaterial.materialAmiga = new BABYLON.StandardMaterial("amiga", scene);
        MfgMaterial.materialAmiga.diffuseTexture = new BABYLON.Texture(src_1.MfgSettings.PATH_IMAGE_TEXTURE + "mosaic.jpg", scene);
        MfgMaterial.materialAmiga.emissiveColor = new BABYLON.Color3(0.5, 0.5, 0.5);
        MfgMaterial.materialGround = new BABYLON.StandardMaterial("groundMat", scene);
        MfgMaterial.materialGround.diffuseColor = new BABYLON.Color3(0.5, 0.5, 0.5);
        MfgMaterial.materialGround.emissiveColor = new BABYLON.Color3(0.2, 0.2, 0.2);
        MfgMaterial.materialGround.backFaceCulling = false;
        MfgMaterial.materialWood = new BABYLON.StandardMaterial("wood", src_1.MfgScene.scene);
        MfgMaterial.materialWood.diffuseTexture = new BABYLON.Texture(src_1.MfgSettings.PATH_IMAGE_TEXTURE + "wood.jpg", scene);
        MfgMaterial.materialWood.emissiveColor = new BABYLON.Color3(0.5, 0.5, 0.5);
        MfgMaterial.materialGrass = new BABYLON.StandardMaterial("grass", scene);
        MfgMaterial.materialGrass.diffuseTexture = new BABYLON.Texture(src_1.MfgSettings.PATH_IMAGE_TEXTURE + "grass.jpg", scene);
        MfgMaterial.materialGrass.diffuseTexture.uScale = 5.0; //Repeat 5 times on the Vertical Axes
        MfgMaterial.materialGrass.diffuseTexture.vScale = 5.0; //Repeat 5 times on the Horizontal Axes
        MfgMaterial.materialGrass.backFaceCulling = false; //Always show the front and the back of an element
        MfgMaterial.materialGlass = new BABYLON.StandardMaterial("glass", scene);
        MfgMaterial.materialGlass.diffuseTexture = new BABYLON.Texture(src_1.MfgSettings.PATH_IMAGE_TEXTURE + "glass.jpg", scene);
        //MfgMaterial.materialGlass.diffuseColor   = new BABYLON.Color3( 1, 0, 0 ); //Red
        MfgMaterial.materialGlass.alpha = 0.5;
    }
}
MfgMaterial.materialTest1 = null;
MfgMaterial.materialMFLogo = null;
MfgMaterial.materialAmiga = null;
MfgMaterial.materialGround = null;
MfgMaterial.materialWood = null;
MfgMaterial.materialGrass = null;
MfgMaterial.materialGlass = null;
exports.MfgMaterial = MfgMaterial;
//# sourceMappingURL=MfgMaterial.js.map