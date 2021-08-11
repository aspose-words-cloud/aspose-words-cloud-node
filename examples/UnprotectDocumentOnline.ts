const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const documentsDir = "./";
const unprotectRequest = new model.UnprotectDocumentOnlineRequest({
    document: fs.createReadStream(documentsDir + "Sample.docx"),
    protectionRequest: new model.ProtectionRequest({
        password: "aspose"
    })
});

return wordsApi.unprotectDocumentOnline(unprotectRequest)
.then((unprotectRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of unprotectRequest: ", unprotectRequestResult);
});