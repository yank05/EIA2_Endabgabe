var Firework;
(function (Firework) {
    window.addEventListener("load", handleLoad);
    let crc2;
    const url = "https://webuser.hs-furtwangen.de/~koenigya/Database/index.php/";
    let fireworks = [];
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
            console.log(fireworks);
            let object = fireworks[index];
            let list = document.getElementById("list");
            let listObject = document.createElement("li");
            listObject.innerHTML = object.name;
            list.appendChild(listObject);
            listObject.addEventListener("click", generatePresets);
            console.log(object);
        }
    }
    function saveIt() {
    }
    ;
    function canvasClick() {
    }
    ;
    function generatePresets() {
    }
})(Firework || (Firework = {}));
//# sourceMappingURL=main.js.map