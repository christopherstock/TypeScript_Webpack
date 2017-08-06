import { MfgLevel } from '../src';
/*****************************************************************************
*   Specifies the paramount part of the game logic.
*
*   @author     Christopher Stock
*   @version    0.0.1
*****************************************************************************/
export declare class MfgGame {
    static currentLevel: MfgLevel;
    /*****************************************************************************
    *   The render loop. This method is being invoked each tick.
    *****************************************************************************/
    static render(): void;
}
