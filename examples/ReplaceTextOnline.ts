const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const documentsDir = "./";
const replaceRequest = new model.ReplaceTextOnlineRequest({
    document: fs.createReadStream(documentsDir + "Sample.docx"),
    replaceText: new model.ReplaceTextParameters({
        oldValue: "aspose",
        newValue: "aspose new"
    })
});

return wordsApi.replaceTextOnline(replaceRequest)
.then((replaceRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of replaceRequest: ", replaceRequestResult);
});