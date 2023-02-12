namespace Firework {
    window.addEventListener("load", handleLoad);
    let crc2: CanvasRenderingContext2D; 

    

    function handleLoad(): void {
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        let canvasHTML: HTMLCanvasElement = document.querySelector("canvas"); 
        canvasHTML.addEventListener("click", testDraw);
        console.log("lol");

        
    }

    function testDraw(_event: MouseEvent): void {
        let x: number = _event.offsetX;
        let y: number = _event.offsetY;
        console.log(x, y); 
    
        crc2.strokeStyle = "blue";
        crc2.lineWidth = 10;
        crc2.resetTransform(); 
        crc2.beginPath();
        crc2.moveTo(x, y);
        crc2.lineTo((x + 100), (y + 100));
        crc2.closePath();
        crc2.stroke();
    }
    
}