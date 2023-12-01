(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/script/GameManager.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'a1689ge85dOb66JTKixFop4', 'GameManager', __filename);
// script/GameManager.js

"use strict";

var audioEngine = cc.audioEngine;

cc.Class({
    extends: cc.Component,
    properties: {
        chicken: cc.Sprite,
        car: cc.Sprite,
        lights: [cc.Sprite],
        carPolice: cc.Sprite,
        button: cc.Button,
        soundEffect: {
            default: [],
            type: [cc.AudioClip]
        },
        _start: false,
        _isRun: false,
        _isDie: false,
        isClick: false
    },

    start: function start() {
        this.node.on(cc.Node.EventType.TOUCH_END, this.onClickStart, this);
    },
    update: function update(dt) {
        if (this.lights[2].getComponent("Light").isLightGreen == true) {
            var chicken = this.chicken.getComponent("Chicken");
            this.car.getComponent("Car").speed = 370;
            if (!this._isRun) {
                this._isRun = true;
                chicken.ani.play("chicken-run");
            }
            if (this.chicken.node.x >= -307) {
                this.chicken.node.x -= 25 * dt;
                this.chicken.node.y -= 40 * dt;
            } else {
                chicken.ani.stop("chicken-run");
                if (!this._isDie) {
                    this._isDie = true;
                    this.playSoundPunch();
                    chicken.ani.play("chicken-die");
                    this.playSoundPolice();
                }
                this.carPolice.node.x -= 500 * dt;
            }
        }
    },
    onClickStart: function onClickStart() {
        if (!this.isClick) {
            this.isClick = true;
            this.button.node.active = false;
            this.playSoundPolice();
            this.playSoundPunch();
        }
    },
    playSoundPolice: function playSoundPolice() {
        if (this.soundEffect[0]) {
            audioEngine.playEffect(this.soundEffect[0], false);
        }
    },
    playSoundPunch: function playSoundPunch() {
        if (this.soundEffect[1]) {
            audioEngine.playEffect(this.soundEffect[1], false);
        }
    }
});

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=GameManager.js.map
        