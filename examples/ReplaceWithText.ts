const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const replaceRequest = new model.ReplaceWithTextRequest({
    name: "Sample.docx",
    rangeStartIdentifier: "id0.0.0",
    rangeText: new model.ReplaceRange({
        text: "Replaced header"
    }),
    rangeEndIdentifier: "id0.0.1"
});

return wordsApi.replaceWithText(replaceRequest)
.then((replaceRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of replaceRequest: ", replaceRequestResult);
});