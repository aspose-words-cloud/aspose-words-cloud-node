const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const documentsDir = "./";
const renderRequest = new model.RenderTableOnlineRequest({
    document: fs.createReadStream(documentsDir + "Sample.docx"),
    format: "png",
    index: 0,
    nodePath: ""
});

return wordsApi.renderTableOnline(renderRequest)
.then((renderRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of renderRequest: ", renderRequestResult);
});