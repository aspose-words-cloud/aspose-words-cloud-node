const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const documentsDir = "./";
const request = new model.GetRangeTextOnlineRequest({
    document: fs.createReadStream(documentsDir + "Sample.doc"),
    rangeStartIdentifier: "id0.0.0",
    rangeEndIdentifier: "id0.0.1"
});

return wordsApi.getRangeTextOnline(request)
.then((requestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of request: ", requestResult);
});