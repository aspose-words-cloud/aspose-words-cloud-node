const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const request = new model.GetDocumentDrawingObjectsRequest({
    name: "Sample.docx"
});

wordsApi.getDocumentDrawingObjects(request)
.then((requestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of request: ", requestResult);
});