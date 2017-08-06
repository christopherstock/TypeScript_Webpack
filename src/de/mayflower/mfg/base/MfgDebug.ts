///<reference path="../../../../../src/de/mayflower/mfg/base/MfgSettings.ts"/>
///<reference path="../../../../../src/de/mayflower/mfg/base/MfgDebugSettings.ts"/>
///<reference path="../../../../../src_lib/de/mayflower/lib/util/LibDebug.ts"/>

import MfgSettings      = de.mayflower.mfg.MfgSettings;
import MfgDebugSettings = de.mayflower.mfg.MfgDebugSettings;
import LibDebug         = de.mayflower.lib.LibDebug;

export namespace de.mayflower.mfg
{
    /*****************************************************************************
    *   The debug system, specifying switchable debug groups
    *   that generate output to the screen console.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *****************************************************************************/
    export class MfgDebug
    {
        /** A primal debug group for general debug purposes. */
        public      static  bugfix                      :LibDebug                       = new LibDebug( true    && MfgSettings.MODE == MfgDebugSettings.MODE_DEBUG );

        /** The debug group for the startup acclaim message. */
        public      static  acclaim                     :LibDebug                       = new LibDebug( true    && MfgSettings.MODE == MfgDebugSettings.MODE_DEBUG );
        /** The debug group for the startup initialization messages. */
        public      static  init                        :LibDebug                       = new LibDebug( true    && MfgSettings.MODE == MfgDebugSettings.MODE_DEBUG );

        /** The debug group for the key system. */
        public      static  key                         :LibDebug                       = new LibDebug( false   && MfgSettings.MODE == MfgDebugSettings.MODE_DEBUG );
        /** The debug group for the image system. */
        public      static  imageLoader                 :LibDebug                       = new LibDebug( false   && MfgSettings.MODE == MfgDebugSettings.MODE_DEBUG );
        /** The debug group for the sound system. */
        public      static  soundLoader                 :LibDebug                       = new LibDebug( false   && MfgSettings.MODE == MfgDebugSettings.MODE_DEBUG );
        /** The debug group for the canvas3D system. */
        public      static  canvas3D                    :LibDebug                       = new LibDebug( false   && MfgSettings.MODE == MfgDebugSettings.MODE_DEBUG );
        /** The debug group for the text file loading system. */
        public      static  textLoader                  :LibDebug                       = new LibDebug( false   && MfgSettings.MODE == MfgDebugSettings.MODE_DEBUG );
        /** The debug group for the 3ds max .ase file parser. */
        public      static  res3ds                      :LibDebug                       = new LibDebug( false   && MfgSettings.MODE == MfgDebugSettings.MODE_DEBUG );
    }
}
