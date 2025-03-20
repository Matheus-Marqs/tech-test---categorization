import { JsonReader } from "../classes/JsonReader.js";


class RunScripts{
    constructor(){
        this.filePath = 'C:\\Automacoes\\challenge - categorizacao\\json\\data01.json';
    }

    async readJson(){
        const jrInstance = new JsonReader(this.filePath);
        return await jrInstance.readJsonFile();
    }

    async runScripts(){
        const dataJson = await this.readJson();
        console.log(dataJson);
    }

}

export async function mainScript() {
    const rsInstance = new RunScripts();
    return await rsInstance.runScripts();
}