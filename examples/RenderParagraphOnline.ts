const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const documentsDir = "./";
const renderRequest = new model.RenderParagraphOnlineRequest({
    document: fs.createReadStream(documentsDir + "Sample.docx"),
    format: "png",
    index: 0,
    nodePath: ""
});

return wordsApi.renderParagraphOnline(renderRequest)
.then((renderRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of renderRequest: ", renderRequestResult);
});