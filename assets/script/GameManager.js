const audioEngine = cc.audioEngine;

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
            type: [cc.AudioClip],
        },
        _start: false,
        _isRun: false,
        _isDie: false,
        isClick: false
    },


    start() {
        this.node.on(cc.Node.EventType.TOUCH_END, this.onClickStart, this);
    },

    update(dt) {
        if (this.lights[2].getComponent("Light").isLightGreen == true) {
            let chicken = this.chicken.getComponent("Chicken");
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

    onClickStart() {
        if (!this.isClick) {
            this.isClick = true;
            this.button.node.active = false;
            this.playSoundPolice();
            this.playSoundPunch();
        }
    },

    playSoundPolice() {
        if (this.soundEffect[0]) {
            audioEngine.playEffect(this.soundEffect[0], false);
        }
    },

    playSoundPunch() {
        if (this.soundEffect[1]) {
            audioEngine.playEffect(this.soundEffect[1], false);
        }
    }
});