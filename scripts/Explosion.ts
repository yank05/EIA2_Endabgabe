namespace Firework {
    export class Explosion {
        name: string; 
        color: string; 
        length: number;
        range: number;
        strength: number;
        position: Vector; 

        constructor(_color: string, _length: number, _range: number, _strength: number) {       
            this.color = _color;
            this.length = _length;
            this.range = _range;
            this.strength = _strength;
            
        }

        triggerExplosion() {

        }
    }
}