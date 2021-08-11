const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const renderRequest = new model.RenderMathObjectRequest({
    name: "Sample.docx",
    format: "png",
    index: 0
});

return wordsApi.renderMathObject(renderRequest)
.then((renderRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of renderRequest: ", renderRequestResult);
});