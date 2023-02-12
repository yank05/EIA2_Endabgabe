namespace Firework {
    export class Explosion extends Creation {
        name: string; 
        color: string; 
        length: number;
        range: number;
        strength: number;
        position: Vector; 

        constructor(_name: string, _color: string, _length: number, _range: number, _strength: number) {  
            super(); 
            this.name = _name;      
            this.color = _color;
            this.length = _length;
            this.range = _range;
            this.strength = _strength;
            
        }

        triggerExplosion() {

        }
    }
}