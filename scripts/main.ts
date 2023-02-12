namespace Firework {
    window.addEventListener("load", handleLoad);
    export let crc2: CanvasRenderingContext2D; 
    const url: string = "https://webuser.hs-furtwangen.de/~koenigya/Database/index.php/";
    let fireworks: Creation[] = []; 
    let particles: Explosion[] = []; 
    let interval; 
  


    interface Data {
        [id: number]: CreationData[]; 
    }

    interface CreationData {
        name: string;
        color: number;
        length: number; 
        range: number; 
        strength: number; 
    }

    interface ReturnedJSON {
        status: string;
        data: Data; 
    }

    function handleLoad(): void {
        getSavedCreations();

        let saveButton = document.getElementById("save"); 
        saveButton.addEventListener("click", saveIt); 

        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        canvas.addEventListener("click", canvasClick); 
    }

    async function getSavedCreations(): Promise<void> {
        let response: Response = await fetch(url + "?command=find&collection=Creations"); 
        let item: string = await response.text();
        let data: ReturnedJSON = JSON.parse(item);

        generateContent(data); 


    };

    function generateContent(_data: ReturnedJSON): void {
        let keys: string[] = Object.keys(_data.data);

        for (let index: number = 0; index < keys.length; index++) {

            let item: Explosion = _data.data[keys[index]];  
            fireworks.push(item);
            console.log(fireworks);  

            let object: Creation = fireworks[index];
            let list: HTMLElement = document.getElementById("list");
            let listObject: HTMLElement = document.createElement("li");
            listObject.innerHTML = object.name; 

            list.appendChild(listObject);
            listObject.addEventListener("click", generatePresets);
            listObject.setAttribute("id", index.toString()); 
        }

            

    }

    async function saveIt(): Promise<void> {
        let formData: FormData = new FormData(document.querySelector("form")); 
        
        interface FormDataJSON {
            [key: string]: FormDataEntryValue | FormDataEntryValue[];
          }
        let json: FormDataJSON = {};
        for (let key of formData.keys())
            if (!json[key]) {
              let values: FormDataEntryValue[] = formData.getAll(key);
              json[key] = values.length > 1 ? values : values[0];
            } 

        let query: URLSearchParams = new URLSearchParams(); 
        query.set("command", "insert");
        query.set("collection", "Creations");
        query.set("data", JSON.stringify(json));
        let response: Response = await fetch(url + "?" + query.toString());
        let responseText: string = await response.text();
        if (responseText.includes("success")) {
            alert("Item added!"); 
        }
        else {
            alert("Error! Try again!");
                }
    }


    function canvasClick(_event: MouseEvent): void {
        let formData: FormData = new FormData(document.querySelector("form")); 
        let color: string = (formData.get("color")).toString();
        let length: number = parseInt((formData.get("length")).toString());
        let range: number = parseInt((formData.get("range")).toString());
        let strength: number = parseInt((formData.get("strength")).toString()); 

        for (let index = 0; index < strength; index++) {
            let newExplosion: Explosion = new Explosion(color, length, range, strength); 
            let clickPosition: Vector = new Vector(_event.offsetX, _event.offsetY);
            newExplosion.position = clickPosition; 

            particles.push(newExplosion); 
            
            
        }
        interval = setInterval(update, 100); 
    }

    function update(): void {
        crc2.fillStyle = "rgba(0, 0, 0, 0.3)"; 
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        for (let newExplosion of particles) {
            newExplosion.move(1 / 2)
        }
        let startTime: number = Date.now();
        if (Date.now() - startTime >= 5000) {
            clearInterval(interval);
        }
           
            
        }


    function generatePresets(event): void {
        let id: number = event.target.id; 
        let object: Explosion = <Explosion>fireworks[id]; 
        
        let input1: HTMLElement = document.getElementById("color");
        input1.setAttribute("value", object.color); 

        let input2: HTMLElement = document.getElementById("length");
        input2.setAttribute("value", (object.length).toString()); 

        let input3: HTMLElement = document.getElementById("range");
        input3.setAttribute("value", (object.range).toString()); 

        let input4: HTMLElement = document.getElementById("strength"); 
        input4.setAttribute("value", (object.strength).toString()); 

        let input5: HTMLElement = document.getElementById("name"); 
        input5.innerHTML = object.name; 

    }
}



