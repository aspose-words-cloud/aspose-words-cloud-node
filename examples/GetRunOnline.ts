const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const documentsDir = "./";
const request = new model.GetRunOnlineRequest({
    document: fs.createReadStream(documentsDir + "Sample.docx"),
    paragraphPath: "paragraphs/0",
    index: 0
});

return wordsApi.getRunOnline(request)
.then((requestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of request: ", requestResult);
});