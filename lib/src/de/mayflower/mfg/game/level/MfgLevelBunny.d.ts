import { MfgLevel } from '../../src';
/*****************************************************************************
*   Specifies the 'bunny' level.
*
*   @author     Christopher Stock
*   @version    0.0.1
*****************************************************************************/
export declare class MfgLevelBunny extends MfgLevel {
    private static SPHERES_TO_SPAWN;
    private light1;
    private light2;
    private light3;
    private shadowGenerator1;
    /*****************************************************************************
    *   Sets up the 'bunny' level.
    *****************************************************************************/
    constructor();
    /*****************************************************************************
    *   Sets up all lights.
    *****************************************************************************/
    private setupLights();
    /*****************************************************************************
    *   Sets up all shadows.
    *****************************************************************************/
    private setupShadows();
    /*****************************************************************************
    *   Sets up the ground for the scene.
    *****************************************************************************/
    private setupGround();
    /*****************************************************************************
    *   Sets up the spheres for the scene.
    *****************************************************************************/
    private setupSpheres();
    /*****************************************************************************
    *   Sets up the box0 for the scene.
    *****************************************************************************/
    private setupBox0();
    /*****************************************************************************
    *   Sets up the compound for the scene.
    *****************************************************************************/
    private setupCompound();
    /*****************************************************************************
    *   Sets up the borders for the scene.
    *****************************************************************************/
    private setupGlassPanes();
    /*****************************************************************************
    *   Sets up a collidable box.
    *****************************************************************************/
    private setupCollidableBox();
    /*****************************************************************************
    *   Sets up the skybox.
    *****************************************************************************/
    private setupSkybox();
    /*****************************************************************************
    *   Sets up all sprites.
    *****************************************************************************/
    private setupSprites();
    /*****************************************************************************
    *   Imports a mesh in the .babylon format.
    *****************************************************************************/
    private importMesh();
}
