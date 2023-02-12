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
    async function saveIt() {
        let formData = new FormData(document.querySelector("form"));
        let name = (formData.get("name")).toString();
        let color = (formData.get("color")).toString();
        let length = parseInt((formData.get("length")).toString());
        let range = parseInt((formData.get("range")).toString());
        let strength = parseInt((formData.get("strength")).toString());
        let creationToSave = new Firework.Explosion(color, length, range, strength, name);
        let json = {};
        for (let key of formData.keys())
            if (!json[key]) {
                let values = formData.getAll(key);
                json[key] = values.length > 1 ? values : values[0];
            }
        let query = new URLSearchParams();
        query.set("command", "insert");
        query.set("collection", "dataList");
        query.set("data", JSON.stringify(json));
        let response = await fetch(url + "?" + query.toString());
        let responseText = await response.text();
        console.log();
        if (responseText.includes("success")) {
            alert("Item added!");
        }
        else {
            alert("Error! Try again!");
        }
    }
})(Firework || (Firework = {}));
;
function saveCreation(_save) {
}
function canvasClick() {
}
;
function generatePresets() {
}
//# sourceMappingURL=main.js.map