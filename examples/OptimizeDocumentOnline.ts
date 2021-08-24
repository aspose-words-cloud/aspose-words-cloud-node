const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
let requestDocument = fs.createReadStream("Sample.docx");
let requestOptions = new model.OptimizationOptions({
    msWordVersion: model.OptimizationOptions.MsWordVersionEnum.Word2002
})
const optimizeRequest = new model.OptimizeDocumentOnlineRequest({
    document: requestDocument,
    options: requestOptions
});

wordsApi.optimizeDocumentOnline(optimizeRequest)
.then((optimizeRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of optimizeRequest: ", optimizeRequestResult);
});