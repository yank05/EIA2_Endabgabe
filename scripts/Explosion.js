var Firework;
(function (Firework) {
    class Explosion extends Firework.Creation {
        color;
        movement;
        range;
        strength;
        position;
        constructor(_color, _movement, _range, _strength, _position) {
            super(Firework.Creation.name);
            this.color = _color;
            this.movement = _movement;
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