const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
let requestDocument = fs.createReadStream("Sample.docx");
const request = new model.GetDocumentDrawingObjectsOnlineRequest({
    document: requestDocument,
    nodePath: "sections/0"
});

wordsApi.getDocumentDrawingObjectsOnline(request)
.then((requestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of request: ", requestResult);
});