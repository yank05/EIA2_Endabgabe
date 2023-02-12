var Firework;
(function (Firework) {
    class Explosion extends Firework.Creation {
        color;
        movement;
        range;
        strength;
        position;
        constructor(_color, _movement, _range, _strength, _position) {
        }
        triggerExplosion() {
        }
    }
    Firework.Explosion = Explosion;
})(Firework || (Firework = {}));
//# sourceMappingURL=Explosion.js.map