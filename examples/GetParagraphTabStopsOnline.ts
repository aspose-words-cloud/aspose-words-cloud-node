const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const documentsDir = "./";
const request = new model.GetParagraphTabStopsOnlineRequest({
    document: fs.createReadStream(documentsDir + "Sample.docx"),
    index: 0
});

return wordsApi.getParagraphTabStopsOnline(request)
.then((requestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of request: ", requestResult);
});