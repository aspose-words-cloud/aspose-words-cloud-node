const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
let requestListUpdate = new model.ListLevelUpdate({
    alignment: model.ListLevelUpdate.AlignmentEnum.Right
})
const updateRequest = new model.UpdateListLevelRequest({
    name: "TestGetLists.doc",
    listId: 1,
    listLevel: 1,
    listUpdate: requestListUpdate
});

wordsApi.updateListLevel(updateRequest)
.then((updateRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of updateRequest: ", updateRequestResult);
});