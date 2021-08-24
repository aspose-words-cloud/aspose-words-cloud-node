const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
let requestDocument = fs.createReadStream("Sample.doc");
let requestListUpdate = new model.ListUpdate({
    isRestartAtEachSection: true
})
const updateRequest = new model.UpdateListOnlineRequest({
    document: requestDocument,
    listId: 1,
    listUpdate: requestListUpdate
});

wordsApi.updateListOnline(updateRequest)
.then((updateRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of updateRequest: ", updateRequestResult);
});