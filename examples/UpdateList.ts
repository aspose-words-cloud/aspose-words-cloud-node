const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
let requestListUpdate = new model.ListUpdate({
    isRestartAtEachSection: true
})
const updateRequest = new model.UpdateListRequest({
    name: "TestGetLists.doc",
    listId: 1,
    listUpdate: requestListUpdate
});

wordsApi.updateList(updateRequest)
.then((updateRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of updateRequest: ", updateRequestResult);
});