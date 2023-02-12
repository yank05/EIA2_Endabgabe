var Firework;
(function (Firework) {
    class Explosion extends Firework.Creation {
        color;
        length;
        range;
        strength;
        position;
        constructor(_color, _length, _range, _strength, _position) {
            super(Firework.Creation.name);
            this.color = _color;
            this.length = _length;
            this.range = _range;
            this.strength = _strength;
            this.position = _position;
        }
        triggerExplosion() {
        }
    }
    Firework.Explosion = Explosion;
})(Firework || (Firework = {}));
//# sourceMappingURL=Explosion.js.map