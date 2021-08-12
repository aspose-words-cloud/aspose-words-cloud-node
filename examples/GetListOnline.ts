const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const documentsDir = "./";
const request = new model.GetListOnlineRequest({
    document: fs.createReadStream(documentsDir + "Sample.doc"),
    listId: 1
});

return wordsApi.getListOnline(request)
.then((requestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of request: ", requestResult);
});