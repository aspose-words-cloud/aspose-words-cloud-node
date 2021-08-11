const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const optimizeRequest = new model.OptimizeDocumentRequest({
    name: "Sample.docx",
    options: new model.OptimizationOptions({
        msWordVersion: model.OptimizationOptions.MsWordVersionEnum.Word2002
    })
});

return wordsApi.optimizeDocument(optimizeRequest)
.then((optimizeRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of optimizeRequest: ", optimizeRequestResult);
});