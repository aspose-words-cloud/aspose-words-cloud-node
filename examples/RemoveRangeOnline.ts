const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const documentsDir = "./";
const removeRequest = new model.RemoveRangeOnlineRequest({
    document: fs.createReadStream(documentsDir + "DocumentElements/Range/RangeGet.doc"),
    rangeStartIdentifier: "id0.0.0",
    rangeEndIdentifier: "id0.0.1"
});

return wordsApi.removeRangeOnline(removeRequest)
.then((removeRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of removeRequest: ", removeRequestResult);
});