const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
let requestDocument = fs.createReadStream("Sample.docx");
const renderRequest = new model.RenderMathObjectOnlineRequest({
    document: requestDocument,
    format: "png",
    index: 0
});

wordsApi.renderMathObjectOnline(renderRequest)
.then((renderRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of renderRequest: ", renderRequestResult);
});