const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const request = new model.GetDocumentHyperlinkByIndexRequest({
    name: "Sample.docx",
    hyperlinkIndex: 0
});

wordsApi.getDocumentHyperlinkByIndex(request)
.then((requestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of request: ", requestResult);
});