"use strict";
cc._RF.push(module, '08920u5/5tAo5J0kdPFVdp4', 'Car');
// script/Car.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        speed: 0
    },

    update: function update(dt) {
        if (this.node.x > -600) this.node.x -= this.speed * dt;
        if (this.speed > 0 && this.node.angle >= -15) this.node.angle -= 0.3;
    }
});

cc._RF.pop();