const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const documentsDir = "./";
const request = new model.GetFootnotesOnlineRequest({
    document: fs.createReadStream(documentsDir + "/Footnote.doc"),
    nodePath: ""
});

return wordsApi.getFootnotesOnline(request)
.then((requestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of request: ", requestResult);
});