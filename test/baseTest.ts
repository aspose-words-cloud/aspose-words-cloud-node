import { WordsApi } from "../src/api";

export function wordsApiInitializer() {
    const config = require("../servercreds.json");
    const wordsApi = new WordsApi(config.AppSid, config.AppKey, "http://api-dev.aspose.cloud");
    return wordsApi;
}
