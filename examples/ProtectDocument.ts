const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const remoteFileName = "Sample.docx";

const protectRequest = new model.ProtectDocumentRequest({
    name: remoteFileName,
    protectionRequest: new model.ProtectionRequest({
        password: "123",
        protectionType: "ReadOnly"
    }),
    destFileName: remoteFileName
});

return wordsApi.protectDocument(protectRequest)
.then((protectRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of protectRequest: ", protectRequestResult);
});