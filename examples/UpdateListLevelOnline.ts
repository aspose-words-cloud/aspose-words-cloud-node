const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
let requestDocument = fs.createReadStream("Sample.doc");
let requestListUpdate = new model.ListLevelUpdate({
    alignment: model.ListLevelUpdate.AlignmentEnum.Right
})
const updateRequest = new model.UpdateListLevelOnlineRequest({
    document: requestDocument,
    listId: 1,
    listLevel: 1,
    listUpdate: requestListUpdate
});

wordsApi.updateListLevelOnline(updateRequest)
.then((updateRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of updateRequest: ", updateRequestResult);
});