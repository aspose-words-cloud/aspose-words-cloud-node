const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const documentsDir = "./";
const deleteRequest = new model.DeleteHeadersFootersOnlineRequest({
    document: fs.createReadStream(documentsDir + "Sample.doc"),
    sectionPath: ""
});

return wordsApi.deleteHeadersFootersOnline(deleteRequest)
.then((deleteRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of deleteRequest: ", deleteRequestResult);
});