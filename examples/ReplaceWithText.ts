const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
let requestRangeText = new model.ReplaceRange({
    text: "Replaced header"
})
const replaceRequest = new model.ReplaceWithTextRequest({
    name: "Sample.docx",
    rangeStartIdentifier: "id0.0.0",
    rangeText: requestRangeText,
    rangeEndIdentifier: "id0.0.1"
});

wordsApi.replaceWithText(replaceRequest)
.then((replaceRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of replaceRequest: ", replaceRequestResult);
});