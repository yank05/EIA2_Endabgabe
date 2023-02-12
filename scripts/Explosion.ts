namespace Firework {
    export class Explosion extends Creation {
        color: string; 
        length: number;
        range: number;
        strength: number;
        position: Vector; 
        declare name: string;

        constructor( _color: string, _length: number, _range: number, _strength: number, _name?: string) {  
            super(_name);  
            if (_name) {
                this.name = _name; 
            }
            this.color = _color;
            this.length = _length;
            this.range = _range;
            this.strength = _strength;  
        }

        triggerExplosion() {
        let start: DOMMatrix = crc2.getTransform();

        let explosion = new Path2D();
        let gradient = crc2.createRadialGradient(0, 0, 0, 0, 0, 10);

        explosion.arc(0, 0, 10, 0, 2 * Math.PI);
        gradient.addColorStop(1, this.color); 
        crc2.fillStyle = gradient; 


        crc2.save();
        crc2.translate(this.position.x, this.position.y);
        crc2.fill(explosion);
        crc2.restore();
        crc2.setTransform(start);
        console.log("Hallo"); 
        }
    }
}