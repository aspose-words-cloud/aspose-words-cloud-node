const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const documentsDir = "./";
const request = new model.GetDocumentDrawingObjectsOnlineRequest({
    document: fs.createReadStream(documentsDir + "Sample.docx"),
    nodePath: "sections/0"
});

return wordsApi.getDocumentDrawingObjectsOnline(request)
.then((requestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of request: ", requestResult);
});