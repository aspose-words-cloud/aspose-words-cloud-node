const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const removeRequest = new model.RemoveRangeRequest({
    name: "Sample.docx",
    rangeStartIdentifier: "id0.0.0",
    rangeEndIdentifier: "id0.0.1"
});

return wordsApi.removeRange(removeRequest)
.then((removeRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of removeRequest: ", removeRequestResult);
});