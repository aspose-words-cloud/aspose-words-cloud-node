const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const documentsDir = "./";
const deleteRequest = new model.DeleteFootnoteOnlineRequest({
    document: fs.createReadStream(documentsDir + "/Footnote.doc"),
    index: 0,
    nodePath: ""
});

return wordsApi.deleteFootnoteOnline(deleteRequest)
.then((deleteRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of deleteRequest: ", deleteRequestResult);
});