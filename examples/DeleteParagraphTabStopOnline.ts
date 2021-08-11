const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const documentsDir = "./";
const deleteRequest = new model.DeleteParagraphTabStopOnlineRequest({
    document: fs.createReadStream(documentsDir + "/ParagraphTabStops.docx"),
    position: 72.0,
    index: 0,
    nodePath: ""
});

return wordsApi.deleteParagraphTabStopOnline(deleteRequest)
.then((deleteRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of deleteRequest: ", deleteRequestResult);
});