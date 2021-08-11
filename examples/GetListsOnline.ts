const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const documentsDir = "./";
const request = new model.GetListsOnlineRequest({
    document: fs.createReadStream(documentsDir + "DocumentElements/Lists/ListsGet.doc")
});

return wordsApi.getListsOnline(request)
.then((requestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of request: ", requestResult);
});