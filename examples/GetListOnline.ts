const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
let requestDocument = fs.createReadStream("Sample.doc");
const request = new model.GetListOnlineRequest({
    document: requestDocument,
    listId: 1
});

wordsApi.getListOnline(request)
.then((requestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of request: ", requestResult);
});