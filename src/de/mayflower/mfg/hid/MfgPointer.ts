namespace de.mayflower.mfg
{
    /*****************************************************************************
    *   Pointer controls.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *****************************************************************************/
    export class MfgPointer
    {
        public static assignPointerDown(evt, pickResult)
        {
            if ( pickResult.hit ) {
                var dir = pickResult.pickedPoint.subtract( MfgScene.scene.activeCamera.position );
                dir.normalize();
                pickResult.pickedMesh.applyImpulse(dir.scale(10), pickResult.pickedPoint);
            }
        }
    }
}
