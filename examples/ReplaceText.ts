const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
let requestReplaceText = new model.ReplaceTextParameters({
    oldValue: "Testing",
    newValue: "Aspose testing"
})
const replaceRequest = new model.ReplaceTextRequest({
    name: "Sample.docx",
    replaceText: requestReplaceText
});

wordsApi.replaceText(replaceRequest)
.then((replaceRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of replaceRequest: ", replaceRequestResult);
});