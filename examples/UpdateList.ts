const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const updateRequest = new model.UpdateListRequest({
    name: "TestGetLists.doc",
    listId: 1,
    listUpdate: new model.ListUpdate({
        isRestartAtEachSection: true
    })
});

return wordsApi.updateList(updateRequest)
.then((updateRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of updateRequest: ", updateRequestResult);
});