const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const documentsDir = "./";
const renderRequest = new model.RenderPageOnlineRequest({
    document: fs.createReadStream(documentsDir + "Sample.docx"),
    pageIndex: 1,
    format: "bmp"
});

return wordsApi.renderPageOnline(renderRequest)
.then((renderRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of renderRequest: ", renderRequestResult);
});