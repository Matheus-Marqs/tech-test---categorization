import fs from "fs/promises";

export class JsonReader {
  constructor(filePath) {
    this.filePath = filePath;
  }

  async readJsonFile() {
    try {
      const data = await fs.readFile(this.filePath, "utf-8");
      return JSON.parse(data);
    } catch (error) {
      console.error(`Erro ao ler o arquivo JSON: ${error.stack}`);
      throw error;
    }
  }
}
