namespace Firework {
    export class Explosion extends Creation {
        color: string; 
        movement: string;
        range: number;
        strength: number;
        position: Vector; 

        constructor(_color: string, _movement: string, _range: number, _strength: number, _position: Vector) { 
            super(Creation.name);       
            this.color = _color;
            this.movement = _movement;
            this.range = _range;
            this.strength = _strength;
            this.position = _position; 
        }

        triggerExplosion() {
            
        }
    }
}