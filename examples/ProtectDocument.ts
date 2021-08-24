const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
let requestProtectionRequest = new model.ProtectionRequest({
    password: "123",
    protectionType: "ReadOnly"
})
const protectRequest = new model.ProtectDocumentRequest({
    name: "Sample.docx",
    protectionRequest: requestProtectionRequest
});

wordsApi.protectDocument(protectRequest)
.then((protectRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of protectRequest: ", protectRequestResult);
});