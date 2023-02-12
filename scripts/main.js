var Firework;
(function (Firework) {
    window.addEventListener("load", handleLoad);
    let crc2;
    function handleLoad() {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = canvas.getContext("2d");
        let canvasHTML = document.querySelector("canvas");
        canvasHTML.addEventListener("click", testDraw);
        console.log("lol");
    }
    function testDraw(_event) {
        let x = _event.offsetX;
        let y = _event.offsetY;
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
})(Firework || (Firework = {}));
//# sourceMappingURL=main.js.map