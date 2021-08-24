const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const renderRequest = new model.RenderTableRequest({
    name: "Sample.docx",
    format: "png",
    index: 0
});

wordsApi.renderTable(renderRequest)
.then((renderRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of renderRequest: ", renderRequestResult);
});