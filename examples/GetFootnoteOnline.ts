const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const documentsDir = "./";
const request = new model.GetFootnoteOnlineRequest({
    document: fs.createReadStream(documentsDir + "Sample.doc"),
    index: 0
});

return wordsApi.getFootnoteOnline(request)
.then((requestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of request: ", requestResult);
});