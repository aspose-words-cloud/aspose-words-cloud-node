const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const splitRequest = new model.SplitDocumentRequest({
    name: "Sample.docx",
    format: "text",
    destFileName: "/TestSplitDocument.text",
    from: 1,
    to: 2
});

return wordsApi.splitDocument(splitRequest)
.then((splitRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of splitRequest: ", splitRequestResult);
});