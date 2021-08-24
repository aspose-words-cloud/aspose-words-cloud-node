const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
let requestDocument = fs.createReadStream("Sample.doc");
let requestRangeText = new model.ReplaceRange({
    text: "Replaced header"
})
const replaceRequest = new model.ReplaceWithTextOnlineRequest({
    document: requestDocument,
    rangeStartIdentifier: "id0.0.0",
    rangeText: requestRangeText,
    rangeEndIdentifier: "id0.0.1"
});

wordsApi.replaceWithTextOnline(replaceRequest)
.then((replaceRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of replaceRequest: ", replaceRequestResult);
});