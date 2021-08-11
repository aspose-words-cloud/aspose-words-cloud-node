const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const documentsDir = "./";
const deleteRequest = new model.DeleteAllParagraphTabStopsOnlineRequest({
    document: fs.createReadStream(documentsDir + "/ParagraphTabStops.docx"),
    index: 0,
    nodePath: ""
});

return wordsApi.deleteAllParagraphTabStopsOnline(deleteRequest)
.then((deleteRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of deleteRequest: ", deleteRequestResult);
});