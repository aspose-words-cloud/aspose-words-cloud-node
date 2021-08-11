const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const documentsDir = "./";
const request = new model.GetRunFontOnlineRequest({
    document: fs.createReadStream(documentsDir + "Sample.docx"),
    paragraphPath: "paragraphs/0",
    index: 0
});

return wordsApi.getRunFontOnline(request)
.then((requestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of request: ", requestResult);
});