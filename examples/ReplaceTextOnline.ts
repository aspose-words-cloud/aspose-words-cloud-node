const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
let requestDocument = fs.createReadStream("Sample.docx");
let requestReplaceText = new model.ReplaceTextParameters({
    oldValue: "aspose",
    newValue: "aspose new"
})
const replaceRequest = new model.ReplaceTextOnlineRequest({
    document: requestDocument,
    replaceText: requestReplaceText
});

wordsApi.replaceTextOnline(replaceRequest)
.then((replaceRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of replaceRequest: ", replaceRequestResult);
});