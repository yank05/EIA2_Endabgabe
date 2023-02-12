var Firework;
(function (Firework) {
    class Explosion extends Firework.Creation {
        color;
        length;
        range;
        strength;
        position;
        counter = 0;
        constructor(_color, _length, _range, _strength, _name) {
            super(_name);
            if (_name) {
                this.name = _name;
            }
            this.color = _color;
            this.length = _length;
            this.range = _range;
            this.strength = _strength;
        }
        triggerExplosion() {
            let start = Firework.crc2.getTransform();
            let explosion = new Path2D();
            let gradient = Firework.crc2.createRadialGradient(0, 0, 0, 0, 0, 10);
            explosion.arc(0, 0, this.range, 0, 2 * Math.PI);
            gradient.addColorStop(1, this.color);
            Firework.crc2.fillStyle = gradient;
            Firework.crc2.save();
            Firework.crc2.translate(this.position.x, this.position.y);
            Firework.crc2.fill(explosion);
            Firework.crc2.restore();
            Firework.crc2.setTransform(start);
        }
        move(_step) {
            let radius = Firework.crc2.canvas.width / 2;
            let angle = Math.random() * 2 * Math.PI;
            let offset = new Firework.Vector((radius * Math.cos(angle) / 8), (radius * Math.sin(angle) / 8));
            offset.scale(_step);
            this.position.add(offset);
            this.triggerExplosion();
        }
    }
    Firework.Explosion = Explosion;
})(Firework || (Firework = {}));
//# sourceMappingURL=Explosion.js.map