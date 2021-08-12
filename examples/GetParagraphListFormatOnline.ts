const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const documentsDir = "./";
const request = new model.GetParagraphListFormatOnlineRequest({
    document: fs.createReadStream(documentsDir + "Sample.doc"),
    index: 0
});

return wordsApi.getParagraphListFormatOnline(request)
.then((requestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of request: ", requestResult);
});