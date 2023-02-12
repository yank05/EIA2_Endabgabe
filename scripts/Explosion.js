var Firework;
(function (Firework) {
    class Explosion {
        name;
        color;
        length;
        range;
        strength;
        position;
        constructor(_color, _length, _range, _strength) {
            this.color = _color;
            this.length = _length;
            this.range = _range;
            this.strength = _strength;
        }
        triggerExplosion() {
        }
    }
    Firework.Explosion = Explosion;
})(Firework || (Firework = {}));
//# sourceMappingURL=Explosion.js.map