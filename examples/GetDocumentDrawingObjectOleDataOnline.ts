const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
let requestDocument = fs.createReadStream("Sample.docx");
const request = new model.GetDocumentDrawingObjectOleDataOnlineRequest({
    document: requestDocument,
    index: 0,
    nodePath: "sections/0"
});

wordsApi.getDocumentDrawingObjectOleDataOnline(request)
.then((requestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of request: ", requestResult);
});