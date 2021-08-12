const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const documentsDir = "./";
const renderRequest = new model.RenderMathObjectOnlineRequest({
    document: fs.createReadStream(documentsDir + "Sample.docx"),
    format: "png",
    index: 0
});

return wordsApi.renderMathObjectOnline(renderRequest)
.then((renderRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of renderRequest: ", renderRequestResult);
});