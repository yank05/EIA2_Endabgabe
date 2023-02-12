namespace Firework {
    export class Explosion extends Creation {
        color: string; 
        length: number;
        range: number;
        strength: number;
        position: Vector; 

        constructor(_color: string, _length: number, _range: number, _strength: number, _position: Vector) { 
            super(Creation.name);       
            this.color = _color;
            this.length = _length;
            this.range = _range;
            this.strength = _strength;
            this.position = _position; 
        }

        triggerExplosion() {

        }
    }
}