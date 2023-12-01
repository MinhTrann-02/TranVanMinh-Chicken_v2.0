"use strict";
cc._RF.push(module, 'd908dbY74VOZLo5TE7k9g4F', 'Light');
// script/Light.js

"use strict";

cc.Class({
    extends: cc.Component,
    properties: {
        redSprite: cc.Sprite,
        yellowSprite: cc.Sprite,
        greenSprite: cc.Sprite,
        chicken: cc.Sprite,
        car: cc.Sprite,
        manager: cc.Node,
        isLightGreen: false,
        _time: 0,
        _timeFlash: 0,
        _red: cc.Color.RED,
        _yellow: cc.Color.YELLOW,
        _green: cc.Color.GREEN,
        _colorDefault: cc.Color.GRAY
    },

    start: function start() {
        this.turnOff(this.redSprite);
        this.turnOff(this.yellowSprite);
        this.turnOff(this.greenSprite);
    },
    update: function update(dt) {
        if (this.manager.getComponent("GameManager").isClick == true) {
            if (this._time >= 0) {
                this.turnOn(this.redSprite, this._red);
                this.turnOff(this.yellowSprite);
                this.turnOff(this.greenSprite);
            }
            if (this._time > 1) {
                this.flashLight(this.redSprite, this._red, dt);
            }
            if (this._time > 2) {
                this.turnOn(this.yellowSprite, this._yellow);
                this.turnOff(this.redSprite);
                this.turnOff(this.greenSprite);
            }
            if (this._time > 2.9) {
                this.flashLight(this.yellowSprite, this._yellow, dt);
            }
            if (this._time > 3.5) {
                this.turnOn(this.greenSprite, this._green);
                this.turnOff(this.yellowSprite);
                this.turnOff(this.redSprite);
                this.isLightGreen = true;
            }
            this._time += dt;
        }
    },
    turnOn: function turnOn(sprite, color) {
        sprite.node.color = color;
    },
    turnOff: function turnOff(sprite) {
        sprite.node.color = this._colorDefault;
    },
    flashLight: function flashLight(sprite, color, dt) {
        if (Math.floor(this._timeFlash) % 2 == 0) {
            sprite.node.color = this._colorDefault;
        } else {
            sprite.node.color = color;
        }
        this._timeFlash += dt * 5;
        if (this._timeFlash >= 8) {
            return true;
        } else return false;
    }
});

cc._RF.pop();