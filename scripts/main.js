var Firework;
(function (Firework) {
    window.addEventListener("load", handleLoad);
    const url = "https://webuser.hs-furtwangen.de/~koenigya/Database/index.php/";
    let fireworks = [];
    let particles = [];
    let interval;
    let startTime;
    let length;
    function handleLoad() {
        getSavedCreations();
        let saveButton = document.getElementById("save");
        saveButton.addEventListener("click", saveIt);
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        Firework.crc2 = canvas.getContext("2d");
        canvas.addEventListener("click", canvasClick);
    }
    async function getSavedCreations() {
        let response = await fetch(url + "?command=find&collection=Creations");
        let item = await response.text();
        let data = JSON.parse(item);
        generateContent(data);
    }
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
            listObject.setAttribute("id", index.toString());
            let deleteButton = document.createElement("button");
            deleteButton.setAttribute("type", "button");
            let id = "delete" + index;
            deleteButton.setAttribute("id", id);
            deleteButton.addEventListener("click", deleteObject);
            deleteButton.innerHTML = "Löschen";
            listObject.appendChild(deleteButton);
        }
    }
    async function deleteObject(_event) {
        let trigger = _event.target.id;
        let triggerNum = trigger.replace(/\D/g, "");
        let identifyer = parseInt(triggerNum);
        let response0 = await fetch(url + "?command=find&collection=Creations");
        let item = await response0.text();
        let data = JSON.parse(item);
        let keys = Object.keys(data.data);
        console.log(keys);
        console.log(identifyer);
        let id = keys[identifyer];
        let query = new URLSearchParams();
        query.set("command", "delete");
        query.set("collection", "Creations");
        query.set("id", id);
        let response1 = await fetch(url + "?" + query.toString());
        let responseText = await response1.text();
        if (responseText.includes("success")) {
            alert("Deine Kreation wurde gelöscht!");
            window.location.reload();
        }
        else {
            alert("Error! Try again!");
        }
    }
    async function saveIt() {
        let formData = new FormData(document.querySelector("form"));
        let json = {};
        for (let key of formData.keys())
            if (!json[key]) {
                let values = formData.getAll(key);
                json[key] = values.length > 1 ? values : values[0];
            }
        let query = new URLSearchParams();
        query.set("command", "insert");
        query.set("collection", "Creations");
        query.set("data", JSON.stringify(json));
        let response = await fetch(url + "?" + query.toString());
        let responseText = await response.text();
        if (responseText.includes("success")) {
            alert("Deine Kreation wurde gespeichert!");
            window.location.reload();
        }
        else {
            alert("Error! Try again!");
        }
    }
    function generatePresets(_event) {
        let target = _event.target;
        if (target.tagName != "BUTTON") {
            let id = parseInt(_event.target.id);
            let object = fireworks[id];
            let input1 = document.getElementById("color");
            input1.setAttribute("value", object.color);
            let input2 = document.getElementById("length");
            input2.setAttribute("value", (object.length).toString());
            let input3 = document.getElementById("range");
            input3.setAttribute("value", (object.range).toString());
            let input4 = document.getElementById("strength");
            input4.setAttribute("value", (object.strength).toString());
            let input5 = document.getElementById("name");
            input5.setAttribute("value", object.name);
        }
    }
    function canvasClick(_event) {
        let formData = new FormData(document.querySelector("form"));
        let color = (formData.get("color")).toString();
        length = parseInt((formData.get("length")).toString());
        let range = parseInt((formData.get("range")).toString());
        let strength = parseInt((formData.get("strength")).toString());
        for (let index = 0; index < strength; index++) {
            let newExplosion = new Firework.Explosion(color, length, range, strength);
            let clickPosition = new Firework.Vector(_event.offsetX, _event.offsetY);
            newExplosion.position = clickPosition;
            particles.push(newExplosion);
        }
        interval = setInterval(update, 100);
        startTime = Date.now();
    }
    function update() {
        Firework.crc2.fillStyle = "rgba(0, 0, 0, 0.3)";
        Firework.crc2.fillRect(0, 0, Firework.crc2.canvas.width, Firework.crc2.canvas.height);
        if (Date.now() - startTime >= length) {
            setTimeout(() => {
                clearInterval(interval);
                Firework.crc2.clearRect(0, 0, Firework.crc2.canvas.width, Firework.crc2.canvas.height);
                particles.splice(0);
            });
        }
        for (let newExplosion of particles) {
            newExplosion.move(1 / 2);
        }
    }
})(Firework || (Firework = {}));
//# sourceMappingURL=main.js.map