const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const documentsDir = "./";
const optimizeRequest = new model.OptimizeDocumentOnlineRequest({
    document: fs.createReadStream(documentsDir + "Sample.docx"),
    options: new model.OptimizationOptions({
        msWordVersion: model.OptimizationOptions.MsWordVersionEnum.Word2002
    })
});

return wordsApi.optimizeDocumentOnline(optimizeRequest)
.then((optimizeRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of optimizeRequest: ", optimizeRequestResult);
});