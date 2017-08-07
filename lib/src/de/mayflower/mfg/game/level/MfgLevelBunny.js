"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BABYLON = require("babylonjs");
const src_1 = require("../../src");
const lib_1 = require("../../../../../../src_lib/de/mayflower/lib/lib");
/*****************************************************************************
*   Specifies the 'bunny' level.
*
*   @author     Christopher Stock
*   @version    0.0.1
*****************************************************************************/
class MfgLevelBunny extends src_1.MfgLevel {
    /*****************************************************************************
    *   Sets up the 'bunny' level.
    *****************************************************************************/
    constructor() {
        super(new BABYLON.Vector3(-80.0, 40.0, -80.0), new BABYLON.Vector3(0, 0, 0), lib_1.LibUI.COLOR_ORANGE_MAYFLOWER);
        this.light1 = null;
        this.light2 = null;
        this.light3 = null;
        this.shadowGenerator1 = null;
        this.setupLights();
        this.setupShadows();
        this.setupGround();
        this.setupCollidableBox();
        this.setupSpheres();
        this.setupBox0();
        this.setupCompound();
        this.setupGlassPanes();
        this.setupSkybox();
        this.setupSprites();
        this.importMesh();
    }
    /*****************************************************************************
    *   Sets up all lights.
    *****************************************************************************/
    setupLights() {
        //setup lights
        this.light1 = new BABYLON.DirectionalLight("dir01", new BABYLON.Vector3(0.2, -1, 0), src_1.MfgScene.scene);
        this.light1.intensity = 1.0;
        this.light1.position = new BABYLON.Vector3(0, 80, 0);
        this.light2 = new BABYLON.PointLight("omni01", new BABYLON.Vector3(-10.0, 0.0, -10.0), src_1.MfgScene.scene);
        this.light2.intensity = 1.0;
        this.light2.diffuse = new BABYLON.Color3(1.0, 0.0, 0.0);
        this.light2.specular = new BABYLON.Color3(1.0, 0.0, 0.0);
        this.light3 = new BABYLON.PointLight("spot01", new BABYLON.Vector3(10.0, 0.0, 10.0), src_1.MfgScene.scene);
        this.light3.intensity = 1.0;
        this.light3.diffuse = new BABYLON.Color3(0.0, 0.0, 1.0);
        this.light3.specular = new BABYLON.Color3(0.0, 0.0, 1.0);
    }
    /*****************************************************************************
    *   Sets up all shadows.
    *****************************************************************************/
    setupShadows() {
        //setup shadows
        this.shadowGenerator1 = new BABYLON.ShadowGenerator(2048, this.light1);
        this.shadowGenerator1.useExponentialShadowMap = true;
        this.shadowGenerator1.usePoissonSampling = true;
    }
    /*****************************************************************************
    *   Sets up the ground for the scene.
    *****************************************************************************/
    setupGround() {
        src_1.MfgSceneFactory.createOldBox("Ground1", new BABYLON.Vector3(0.0, -4.4, 1.0), new BABYLON.Vector3(100.0, 1.0, 100.0), new BABYLON.Vector3(0.0, 0.0, 0.0), 0.0, src_1.MfgMaterial.materialGrass, src_1.MfgScene.scene);
        src_1.MfgSceneFactory.createOldBox("Ground2", new BABYLON.Vector3(0.0, -26.0, -93.5), new BABYLON.Vector3(100.0, 1.0, 100.0), new BABYLON.Vector3(1.0, 0.0, 0.0), -0.45, src_1.MfgMaterial.materialGrass, src_1.MfgScene.scene);
        src_1.MfgSceneFactory.createOldBox("Ground3", new BABYLON.Vector3(0.0, -48.0, -185.0), new BABYLON.Vector3(100.0, 1.0, 100.0), new BABYLON.Vector3(0.0, 0.0, 0.0), 0.0, src_1.MfgMaterial.materialGrass, src_1.MfgScene.scene);
    }
    /*****************************************************************************
    *   Sets up the spheres for the scene.
    *****************************************************************************/
    setupSpheres() {
        var y = 0;
        for (var index = 0; index < MfgLevelBunny.SPHERES_TO_SPAWN; index++) {
            var sphere = BABYLON.Mesh.CreateSphere("Sphere0", 16, 3, src_1.MfgScene.scene);
            sphere.material = src_1.MfgMaterial.materialMFLogo;
            sphere.position = new BABYLON.Vector3(Math.random() * 20 - 10, y, Math.random() * 10 - 5);
            this.shadowGenerator1.getShadowMap().renderList.push(sphere);
            /*
                            sphere.setPhysicsState(BABYLON.PhysicsEngine.SphereImpostor, { mass: 1, friction: 0.0, restitution: 0.0 });
            */
            y += 4;
        }
        // Add 10 linked spheres
        var spheres = [];
        for (index = 0; index < 10; index++) {
            sphere = BABYLON.Mesh.CreateSphere("Sphere0", 16, 1, src_1.MfgScene.scene);
            spheres.push(sphere);
            sphere.material = src_1.MfgMaterial.materialAmiga;
            sphere.position = new BABYLON.Vector3(Math.random() * 20 - 10, y, Math.random() * 10 - 5);
            this.shadowGenerator1.getShadowMap().renderList.push(sphere);
            /*
                            sphere.setPhysicsState(BABYLON.PhysicsEngine.SphereImpostor, { mass: 1, friction: 0.0, restitution: 0.0 });
            */
        }
        for (index = 0; index < 10; index++) {
            spheres[index].setPhysicsLinkWith(spheres[index + 1], new BABYLON.Vector3(0, 0.5, 0), new BABYLON.Vector3(0, -0.5, 0));
        }
    }
    /*****************************************************************************
    *   Sets up the box0 for the scene.
    *****************************************************************************/
    setupBox0() {
        // Box
        var box0 = BABYLON.Mesh.CreateBox("Box0", 3, src_1.MfgScene.scene);
        box0.position = new BABYLON.Vector3(3, 30, 0);
        box0.material = src_1.MfgMaterial.materialWood;
        this.shadowGenerator1.getShadowMap().renderList.push(box0);
        /*
                    box0.setPhysicsState(   BABYLON.PhysicsEngine.BoxImpostor, { mass: 2, friction: 0.4, restitution: 0.3 } );
        */
    }
    /*****************************************************************************
    *   Sets up the compound for the scene.
    *****************************************************************************/
    setupCompound() {
        // Compound
        var part0 = BABYLON.Mesh.CreateBox("part0", 3, src_1.MfgScene.scene);
        part0.position = new BABYLON.Vector3(3, 30, 0);
        part0.material = src_1.MfgMaterial.materialWood;
        var part1 = BABYLON.Mesh.CreateBox("part1", 3, src_1.MfgScene.scene);
        part1.parent = part0; // We need a hierarchy for compound objects
        part1.position = new BABYLON.Vector3(0, 3, 0);
        part1.material = src_1.MfgMaterial.materialWood;
        this.shadowGenerator1.getShadowMap().renderList.push(part0);
        this.shadowGenerator1.getShadowMap().renderList.push(part1);
        /*
                    MfgScene.scene.createCompoundImpostor(
                        [
                            { mesh: part0, impostor: BABYLON.PhysicsEngine.BoxImpostor },
                            { mesh: part1, impostor: BABYLON.PhysicsEngine.BoxImpostor },
                        ],
                        {
                            mass: 2, friction: 0.4, restitution: 0.3
                        }
                    );
        */
    }
    /*****************************************************************************
    *   Sets up the borders for the scene.
    *****************************************************************************/
    setupGlassPanes() {
        var glassPane1 = BABYLON.Mesh.CreateBox("border0", 1.0, src_1.MfgScene.scene);
        glassPane1.position = new BABYLON.Vector3(0.0, 5.0, 0.0);
        glassPane1.scaling = new BABYLON.Vector3(1.0, 20.0, 50.0);
        glassPane1.checkCollisions = true;
        var glassPane2 = BABYLON.Mesh.CreateBox("border2", 1.0, src_1.MfgScene.scene);
        glassPane2.position = new BABYLON.Vector3(0.0, 5.0, 0.0);
        glassPane2.scaling = new BABYLON.Vector3(50.0, 20.0, 1.0);
        glassPane2.checkCollisions = true;
        /*
                    glassPane1.setPhysicsState( BABYLON.PhysicsEngine.BoxImpostor, { mass: 0, friction: 0.0, restitution: 0.0 } );
                    glassPane2.setPhysicsState( BABYLON.PhysicsEngine.BoxImpostor, { mass: 0, friction: 0.0, restitution: 0.0 } );
        */
        glassPane1.material = src_1.MfgMaterial.materialGlass;
        glassPane2.material = src_1.MfgMaterial.materialGlass;
        //MfgScene.shadowGenerator.getShadowMap().renderList.push( glassPane1 );
        //MfgScene.shadowGenerator.getShadowMap().renderList.push( glassPane2 );
    }
    /*****************************************************************************
    *   Sets up a collidable box.
    *****************************************************************************/
    setupCollidableBox() {
        var solidBox = BABYLON.Mesh.CreateBox("box1", 1.0, src_1.MfgScene.scene);
        solidBox.scaling = new BABYLON.Vector3(3.0, 3.0, 3.0);
        solidBox.position = new BABYLON.Vector3(45.0, -2.0, -45.0);
        solidBox.checkCollisions = true;
        solidBox.material = src_1.MfgMaterial.materialAmiga;
    }
    /*****************************************************************************
    *   Sets up the skybox.
    *****************************************************************************/
    setupSkybox() {
        // Skybox
        var skybox = BABYLON.Mesh.CreateBox("skyBox", 500.0, src_1.MfgScene.scene);
        var skyboxMaterial = new BABYLON.StandardMaterial("skyBox", src_1.MfgScene.scene);
        //skybox.position.z -= 200.0;
        skyboxMaterial.backFaceCulling = false;
        skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture(src_1.MfgSettings.PATH_IMAGE_TEXTURE + "skybox", src_1.MfgScene.scene);
        skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
        skyboxMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
        skyboxMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
        //skyboxMaterial.disableLighting = true;
        skybox.material = skyboxMaterial;
    }
    /*****************************************************************************
    *   Sets up all sprites.
    *****************************************************************************/
    setupSprites() {
        var tree1 = new BABYLON.Sprite("tree1", src_1.MfgSprite.spriteManager);
        tree1.position = new BABYLON.Vector3(45.0, 5.0, -35.0);
        tree1.size = 20.0;
        var tree2 = new BABYLON.Sprite("tree1", src_1.MfgSprite.spriteManager);
        tree2.position = new BABYLON.Vector3(45.0, 5.0, -20.0);
        tree2.size = 20.0;
        var tree3 = new BABYLON.Sprite("tree1", src_1.MfgSprite.spriteManager);
        tree3.position = new BABYLON.Vector3(45.0, 5.0, -5.0);
        tree3.size = 20.0;
        var tree4 = new BABYLON.Sprite("tree1", src_1.MfgSprite.spriteManager);
        tree4.position = new BABYLON.Vector3(45.0, 5.0, 10.0);
        tree4.size = 20.0;
        var tree5 = new BABYLON.Sprite("tree1", src_1.MfgSprite.spriteManager);
        tree5.position = new BABYLON.Vector3(45.0, 5.0, 25.0);
        tree5.size = 20.0;
        var tree6 = new BABYLON.Sprite("tree1", src_1.MfgSprite.spriteManager);
        tree6.position = new BABYLON.Vector3(45.0, 5.0, 40.0);
        tree6.size = 20.0;
    }
    /*****************************************************************************
    *   Imports a mesh in the .babylon format.
    *****************************************************************************/
    importMesh() {
        // The first parameter can be used to specify which mesh to import. Here we import all meshes
        BABYLON.SceneLoader.ImportMesh("", src_1.MfgSettings.PATH_3DS, "rabbit.babylon", src_1.MfgScene.scene, function (newMeshes) {
            var rabbit = newMeshes[0];
            //transform the rabbit
            rabbit.position.y -= 4.0;
            rabbit.position.z += 60.0;
            rabbit.rotate(new BABYLON.Vector3(0.0, 1.0, 0.0), 135.0, BABYLON.Space.LOCAL);
            //rabbit.checkCollisions = true;
            src_1.MfgInit.onInitCompleted();
        });
    }
}
MfgLevelBunny.SPHERES_TO_SPAWN = 250;
exports.MfgLevelBunny = MfgLevelBunny;
//# sourceMappingURL=MfgLevelBunny.js.map