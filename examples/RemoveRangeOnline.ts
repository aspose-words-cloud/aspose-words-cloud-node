const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
let requestDocument = fs.createReadStream("Sample.doc");
const removeRequest = new model.RemoveRangeOnlineRequest({
    document: requestDocument,
    rangeStartIdentifier: "id0.0.0",
    rangeEndIdentifier: "id0.0.1"
});

wordsApi.removeRangeOnline(removeRequest)
.then((removeRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of removeRequest: ", removeRequestResult);
});