const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const request = new model.GetRangeTextRequest({
    name: "Sample.docx",
    rangeStartIdentifier: "id0.0.0",
    rangeEndIdentifier: "id0.0.1"
});

wordsApi.getRangeText(request)
.then((requestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of request: ", requestResult);
});