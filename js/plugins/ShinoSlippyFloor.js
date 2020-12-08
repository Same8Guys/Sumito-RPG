//=============================================================================
// ShinoSlippyFloor.js
//=============================================================================
// [Update History]
// 2020.Dec.8 First Release

/*:
 * @target MZ
 * @plugindesc Sets a region number as slippy floor
 * @author SnipyShino
 *
 * @param regionNumber
 * @desc Region number for slippery floor
 * @type number
 * @default 103
 *
 * @help
 * ============================================================================
 *                                Shinos Slippy Floor
 *                                 Version 1.0.0
 *                                    SnipyShino
 * ============================================================================
 * 
 * This pluggin allows a region number to be assigned for painting slippery 
 * floor. The player will keep moving until they encounter an obstacle or
 * non-slippy tile.
 *
 * Slippy region is 103 by default.
 * 
 * ============================================================================
 * [License]
 * this plugin is released under MIT license.
 * http://opensource.org/licenses/mit-license.php
 */

(function () {
    'use strict';
	const pluginName = 'ShinoSlippyFloor';
    console.log(pluginName + ' is active');
	
	const params = PluginManager.parameters(pluginName);
	console.log(params.regionNumber);
})();
