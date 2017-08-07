
    import * as BABYLON from 'babylonjs';

    /*****************************************************************************
    *   Constructs scene objects.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *****************************************************************************/
    export class MfgSceneFactory
    {
        /*****************************************************************************
        *   Creates a box.
        *****************************************************************************/
        public static createBox
        (
            id              :string,
            position        :BABYLON.Vector3,
            width           :number,
            height          :number,
            depth           :number,
            rotationAxis    :BABYLON.Vector3,
            rotationAmount  :number,
            material        :BABYLON.Material,
            scene           :BABYLON.Scene
        )
        :BABYLON.Mesh
        {
            let box:BABYLON.Mesh = BABYLON.Mesh.CreateBox
            (
                id,
                width,
                scene
            );

            box.position        = position;

            box.position.x += width  / 2;
            box.position.y += height / 2;
            box.position.z += depth  / 2;

            box.checkCollisions = true;
            box.material        = material;
            box.receiveShadows  = false;

            box.rotate( rotationAxis, rotationAmount, BABYLON.Space.WORLD );

            box.physicsImpostor = new BABYLON.PhysicsImpostor
            (
                box,
                BABYLON.PhysicsImpostor.BoxImpostor,
                {
                    mass:        0,
                    friction:    0.5,
                    restitution: 0.7
                },
                scene
            );

            return box;
        }

        /*****************************************************************************
        *   Creates a box the OLD style.
        *****************************************************************************/
        public static createOldBox
        (
            id              :string,
            position        :BABYLON.Vector3,
            scaling         :BABYLON.Vector3,
            rotationAxis    :BABYLON.Vector3,
            rotationAmount  :number,
            material        :BABYLON.Material,
            scene           :BABYLON.Scene
        )
        :BABYLON.Mesh
        {
            let box:BABYLON.Mesh = BABYLON.Mesh.CreateBox( id, 1, scene );

            box.position         = position;
            box.scaling          = scaling;
            box.checkCollisions  = true;
            box.material         = material;
            box.receiveShadows   = true;

            box.rotate( rotationAxis, rotationAmount, BABYLON.Space.WORLD );

            box.physicsImpostor = new BABYLON.PhysicsImpostor
            (
                box,
                BABYLON.PhysicsImpostor.BoxImpostor,
                {
                    mass:        0,
                    friction:    0.5,
                    restitution: 0.7
                },
                scene
            );

            return box;
        }
    }
