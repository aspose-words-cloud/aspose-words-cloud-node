const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
let requestProtectionRequest = new model.ProtectionRequest({
    password: "aspose"
})
const unprotectRequest = new model.UnprotectDocumentRequest({
    name: "Sample.docx",
    protectionRequest: requestProtectionRequest
});

wordsApi.unprotectDocument(unprotectRequest)
.then((unprotectRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of unprotectRequest: ", unprotectRequestResult);
});