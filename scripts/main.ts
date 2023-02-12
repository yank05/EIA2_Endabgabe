namespace Firework {
    window.addEventListener("load", handleLoad);
    let crc2: CanvasRenderingContext2D; 
    const url: string = "https://webuser.hs-furtwangen.de/~koenigya/Database/index.php/";
    let fireworks: Creation[] = []; 

    interface ReturnedJSON {

    }

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
            console.log(object);
        }

            

    }

    function saveIt(): void {
        let formData: FormData = new FormData(document.querySelector("form")); 
        let name: string = (formData.get("name")).toString();
        let color: string = (formData.get("color")).toString();
        let length: number = parseInt((formData.get("length")).toString());
        let range: number = parseInt((formData.get("range")).toString());
        let strength: number = parseInt((formData.get("strength")).toString()); 

        let CreationToSave: Creation; 
        CreationToSave.saveCreation(); 
    }; 

    function canvasClick(): void {

    };

    function generatePresets(): void {

    }
}


