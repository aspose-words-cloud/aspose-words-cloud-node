const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
let requestDocument = fs.createReadStream("Sample.docx");
let requestProtectionRequest = new model.ProtectionRequest({
    newPassword: "123"
})
const protectRequest = new model.ProtectDocumentOnlineRequest({
    document: requestDocument,
    protectionRequest: requestProtectionRequest
});

wordsApi.protectDocumentOnline(protectRequest)
.then((protectRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of protectRequest: ", protectRequestResult);
});