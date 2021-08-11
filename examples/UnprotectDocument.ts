const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const unprotectRequest = new model.UnprotectDocumentRequest({
    name: "Sample.docx",
    protectionRequest: new model.ProtectionRequest({
        password: "aspose"
    })
});

return wordsApi.unprotectDocument(unprotectRequest)
.then((unprotectRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of unprotectRequest: ", unprotectRequestResult);
});