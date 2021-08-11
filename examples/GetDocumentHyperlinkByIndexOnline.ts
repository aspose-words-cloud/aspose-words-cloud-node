const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const documentsDir = "./";
const request = new model.GetDocumentHyperlinkByIndexOnlineRequest({
    document: fs.createReadStream(documentsDir + "Sample.docx"),
    hyperlinkIndex: 0
});

return wordsApi.getDocumentHyperlinkByIndexOnline(request)
.then((requestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of request: ", requestResult);
});