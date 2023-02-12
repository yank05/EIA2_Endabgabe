var Firework;
(function (Firework) {
    class Explosion extends Firework.Creation {
        name;
        color;
        length;
        range;
        strength;
        position;
        constructor(_color, _length, _range, _strength, _name) {
            if (_name) {
                super(_name);
            }
            else {
                super(Firework.Creation.name);
            }
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