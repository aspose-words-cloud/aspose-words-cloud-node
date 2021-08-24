const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
let requestDocument = fs.createReadStream("Sample.docx");
let requestProtectionRequest = new model.ProtectionRequest({
    password: "aspose"
})
const unprotectRequest = new model.UnprotectDocumentOnlineRequest({
    document: requestDocument,
    protectionRequest: requestProtectionRequest
});

wordsApi.unprotectDocumentOnline(unprotectRequest)
.then((unprotectRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of unprotectRequest: ", unprotectRequestResult);
});