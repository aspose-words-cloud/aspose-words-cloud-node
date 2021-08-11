const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const documentsDir = "./";
const protectRequest = new model.ProtectDocumentOnlineRequest({
    document: fs.createReadStream(documentsDir + "Sample.docx"),
    protectionRequest: new model.ProtectionRequest({
        newPassword: "123"
    })
});

return wordsApi.protectDocumentOnline(protectRequest)
.then((protectRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of protectRequest: ", protectRequestResult);
});