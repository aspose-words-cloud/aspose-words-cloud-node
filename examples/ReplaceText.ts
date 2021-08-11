const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const remoteFileName = "Sample.docx";

const replaceRequest = new model.ReplaceTextRequest({
    name: remoteFileName,
    replaceText: new model.ReplaceTextParameters({
        oldValue: "Testing",
        newValue: "Aspose testing"
    }),
    destFileName: remoteFileName
});

return wordsApi.replaceText(replaceRequest)
.then((replaceRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of replaceRequest: ", replaceRequestResult);
});