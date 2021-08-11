const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const documentsDir = "./";
const replaceRequest = new model.ReplaceWithTextOnlineRequest({
    document: fs.createReadStream(documentsDir + "DocumentElements/Range/RangeGet.doc"),
    rangeStartIdentifier: "id0.0.0",
    rangeText: new model.ReplaceRange({
        text: "Replaced header"
    }),
    rangeEndIdentifier: "id0.0.1"
});

return wordsApi.replaceWithTextOnline(replaceRequest)
.then((replaceRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of replaceRequest: ", replaceRequestResult);
});