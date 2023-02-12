var Firework;
(function (Firework) {
    window.addEventListener("load", handleLoad);
    let crc2;
    const url = "webuser.hs-furtwangen.de/~koenigya";
    let fireworks;
    function handleLoad() {
        getSavedCreations();
        let saveButton = document.getElementById("save");
        saveButton.addEventListener("click", saveIt);
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = canvas.getContext("2d");
        canvas.addEventListener("click", canvasClick);
    }
    async function getSavedCreations() {
        let response = await fetch(url + "?command=find&collection=Creations");
        let item = await response.text();
        let data = JSON.parse(item);
        generateContent(data);
    }
    ;
    function generateContent(_data) {
        let keys = Object.keys(_data.data);
        for (let index = 0; index < keys.length; index++) {
            let item = _data.data[keys[index]];
            fireworks.push(item);
            let Object = fireworks[index];
            document.getElementById("list");
            let list = Object.name;
        }
    }
    function saveIt() {
    }
    ;
    function canvasClick() {
    }
    ;
})(Firework || (Firework = {}));
//# sourceMappingURL=main.js.map