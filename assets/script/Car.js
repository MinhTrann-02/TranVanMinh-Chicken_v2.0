cc.Class({
    extends: cc.Component,

    properties: {
        speed: 0
    },

    update(dt) {
        if (this.node.x > -600) this.node.x -= this.speed * dt;
        if (this.speed > 0 && this.node.angle >= -15) this.node.angle -= 0.3;
    },
});
