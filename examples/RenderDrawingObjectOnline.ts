const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
let requestDocument = fs.createReadStream("Sample.docx");
const renderRequest = new model.RenderDrawingObjectOnlineRequest({
    document: requestDocument,
    format: "png",
    index: 0,
    nodePath: "sections/0"
});

wordsApi.renderDrawingObjectOnline(renderRequest)
.then((renderRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of renderRequest: ", renderRequestResult);
});