const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const request = new model.GetDocumentDrawingObjectByIndexRequest({
    name: "Sample.docx",
    index: 0
});

wordsApi.getDocumentDrawingObjectByIndex(request)
.then((requestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of request: ", requestResult);
});