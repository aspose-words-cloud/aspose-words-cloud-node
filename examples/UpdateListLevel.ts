const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const updateRequest = new model.UpdateListLevelRequest({
    name: "TestGetLists.doc",
    listId: 1,
    listLevel: 1,
    listUpdate: new model.ListLevelUpdate({
        alignment: model.ListLevelUpdate.AlignmentEnum.Right
    })
});

return wordsApi.updateListLevel(updateRequest)
.then((updateRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of updateRequest: ", updateRequestResult);
});