const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const documentsDir = "./";
const updateRequest = new model.UpdateListOnlineRequest({
    document: fs.createReadStream(documentsDir + "DocumentElements/Lists/ListsGet.doc"),
    listId: 1,
    listUpdate: new model.ListUpdate({
        isRestartAtEachSection: true
    })
});

return wordsApi.updateListOnline(updateRequest)
.then((updateRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of updateRequest: ", updateRequestResult);
});