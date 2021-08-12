const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const protectRequest = new model.ProtectDocumentRequest({
    name: "Sample.docx",
    protectionRequest: new model.ProtectionRequest({
        password: "123",
        protectionType: "ReadOnly"
    })
});

return wordsApi.protectDocument(protectRequest)
.then((protectRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of protectRequest: ", protectRequestResult);
});