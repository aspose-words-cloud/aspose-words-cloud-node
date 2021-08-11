const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const documentsDir = "./";
const updateRequest = new model.UpdateListLevelOnlineRequest({
    document: fs.createReadStream(documentsDir + "DocumentElements/Lists/ListsGet.doc"),
    listId: 1,
    listLevel: 1,
    listUpdate: new model.ListLevelUpdate({
        alignment: model.ListLevelUpdate.AlignmentEnum.Right
    })
});

return wordsApi.updateListLevelOnline(updateRequest)
.then((updateRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of updateRequest: ", updateRequestResult);
});