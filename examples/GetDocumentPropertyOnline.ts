const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
let requestDocument = fs.createReadStream("Sample.docx");
const request = new model.GetDocumentPropertyOnlineRequest({
    document: requestDocument,
    propertyName: "Author"
});

wordsApi.getDocumentPropertyOnline(request)
.then((requestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of request: ", requestResult);
});