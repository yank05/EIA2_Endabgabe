namespace Firework {
    window.addEventListener("load", handleLoad);
    let crc2: CanvasRenderingContext2D; 
    const url: string = "webuser.hs-furtwangen.de/~koenigya";
    let fireworks: Creation[]; 

    interface ReturnedJSON {

    }

    interface Data {
        [id: number]: ItemAdded[]; 
    }

    interface ItemAdded {
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

            let Object: Creation = fireworks[index];
            document.getElementById("list");
            let list = 
            Object.name

    }
    }


    function saveIt(): void {

    }; 

    function canvasClick(): void {

    };

