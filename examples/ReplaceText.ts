const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const replaceRequest = new model.ReplaceTextRequest({
    name: "Sample.docx",
    replaceText: new model.ReplaceTextParameters({
        oldValue: "Testing",
        newValue: "Aspose testing"
    })
});

return wordsApi.replaceText(replaceRequest)
.then((replaceRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of replaceRequest: ", replaceRequestResult);
});