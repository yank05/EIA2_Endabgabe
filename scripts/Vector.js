var Firework;
(function (Firework) {
    class Vector {
        x;
        y;
        constructor(_x, _y) {
            this.set(_x, _y);
        }
        set(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        scale(_factor) {
            this.x *= _factor;
            this.y *= _factor;
        }
        add(_addend) {
            this.y += _addend.y;
            this.x += _addend.x;
        }
        copy() {
            return new Vector(this.x, this.y);
        }
        random(_minLength, _maxLength) {
            let length = _minLength + Math.random() * (_maxLength - _minLength);
            let direction = Math.random() * 2 * Math.PI;
            this.set(Math.cos(direction), Math.sin(direction));
            this.scale(length);
        }
    }
    Firework.Vector = Vector;
})(Firework || (Firework = {}));
//# sourceMappingURL=Vector.js.map