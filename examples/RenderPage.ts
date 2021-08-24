const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const renderRequest = new model.RenderPageRequest({
    name: "Sample.docx",
    pageIndex: 1,
    format: "bmp"
});

wordsApi.renderPage(renderRequest)
.then((renderRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of renderRequest: ", renderRequestResult);
});