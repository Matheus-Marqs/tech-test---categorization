import { promises as fs } from "fs";

import { JsonReader } from "../classes/JsonReader.js";
import { ProductCategorizer } from "../classes/ProductCategorizer.js";

class RunScripts {
  constructor() {
    this.filePath =
      "C:\\Automacoes\\challenge - categorizacao\\json\\data01.json";
    this.outputFilePath =
      "C:\\Automacoes\\challenge - categorizacao\\json\\output.json";
  }

  async clearOutputFile() {
    try {
      await fs.access(this.outputFilePath);
      await fs.unlink(this.outputFilePath);

      await new Promise((resolve) => setTimeout(resolve, 5000));
    } catch (error) {
      if (error.code !== "ENOENT") {
        console.error("Erro ao tentar remover output.js:", error);
      }
    }
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
    await this.clearOutputFile();

    const dataJson = await this.readJson();

    const dataCategorizer = await this.categorizeProducts(dataJson);
    await fs.writeFile(
      this.outputFilePath,
      JSON.stringify(dataCategorizer, null, 2)
    );
  }
}

export async function mainScript() {
  const rsInstance = new RunScripts();
  await rsInstance.runScripts();
}
