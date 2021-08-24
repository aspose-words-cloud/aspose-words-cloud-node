const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
let requestDocument = fs.createReadStream("Sample.docx");
const request = new model.GetDocumentHyperlinkByIndexOnlineRequest({
    document: requestDocument,
    hyperlinkIndex: 0
});

wordsApi.getDocumentHyperlinkByIndexOnline(request)
.then((requestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of request: ", requestResult);
});