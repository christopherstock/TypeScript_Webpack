"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BABYLON = require("babylonjs");
/*****************************************************************************
*   Constructs scene objects.
*
*   @author     Christopher Stock
*   @version    0.0.1
*****************************************************************************/
class MfgSceneFactory {
    /*****************************************************************************
    *   Creates a box.
    *****************************************************************************/
    static createBox(id, position, width, height, depth, rotationAxis, rotationAmount, material, scene) {
        let box = BABYLON.Mesh.CreateBox(id, width, scene);
        box.position = position;
        box.position.x += width / 2;
        box.position.y += height / 2;
        box.position.z += depth / 2;
        box.checkCollisions = true;
        box.material = material;
        box.receiveShadows = false;
        box.rotate(rotationAxis, rotationAmount, BABYLON.Space.WORLD);
        box.physicsImpostor = new BABYLON.PhysicsImpostor(box, BABYLON.PhysicsImpostor.BoxImpostor, {
            mass: 0,
            friction: 0.5,
            restitution: 0.7
        }, scene);
        return box;
    }
    /*****************************************************************************
    *   Creates a box the OLD style.
    *****************************************************************************/
    static createOldBox(id, position, scaling, rotationAxis, rotationAmount, material, scene) {
        let box = BABYLON.Mesh.CreateBox(id, 1, scene);
        box.position = position;
        box.scaling = scaling;
        box.checkCollisions = true;
        box.material = material;
        box.receiveShadows = true;
        box.rotate(rotationAxis, rotationAmount, BABYLON.Space.WORLD);
        box.physicsImpostor = new BABYLON.PhysicsImpostor(box, BABYLON.PhysicsImpostor.BoxImpostor, {
            mass: 0,
            friction: 0.5,
            restitution: 0.7
        }, scene);
        return box;
    }
}
exports.MfgSceneFactory = MfgSceneFactory;
//# sourceMappingURL=MfgSceneFactory.js.map