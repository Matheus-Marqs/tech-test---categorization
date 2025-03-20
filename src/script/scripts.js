import { JsonReader } from "../classes/JsonReader.js";
import { ProductCategorizer } from "../classes/ProductCategorizer.js";

class RunScripts {
  constructor() {
    this.filePath = "C:\\Automacoes\\challenge - categorizacao\\json\\data01.json";
  }

  async readJson() {
    const jrInstance = new JsonReader(this.filePath);
    return await jrInstance.readJsonFile();
  }

  async categorizeProducts(dataJson) {
    const pcInstance = new ProductCategorizer();
    return await pcInstance.categorize(dataJson);
  }

  async runScripts() {
    const dataJson = await this.readJson();
    console.log(dataJson);

    const dataCategorizer = await this.categorizeProducts(dataJson);
    console.log(JSON.stringify(dataCategorizer, null, 2))
  }
}

export async function mainScript() {
  const rsInstance = new RunScripts();
  await rsInstance.runScripts();
}
