const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
let requestDocument = fs.createReadStream("Sample.doc");
const request = new model.GetRangeTextOnlineRequest({
    document: requestDocument,
    rangeStartIdentifier: "id0.0.0",
    rangeEndIdentifier: "id0.0.1"
});

wordsApi.getRangeTextOnline(request)
.then((requestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of request: ", requestResult);
});