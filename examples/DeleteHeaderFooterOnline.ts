const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const documentsDir = "./";
const deleteRequest = new model.DeleteHeaderFooterOnlineRequest({
    document: fs.createReadStream(documentsDir + "DocumentElements/HeaderFooters/HeadersFooters.doc"),
    sectionPath: "",
    index: 0
});

return wordsApi.deleteHeaderFooterOnline(deleteRequest)
.then((deleteRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of deleteRequest: ", deleteRequestResult);
});