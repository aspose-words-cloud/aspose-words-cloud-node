const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const documentsDir = "./";
const updateRequest = new model.UpdateParagraphListFormatOnlineRequest({
    document: fs.createReadStream(documentsDir + "Sample.doc"),
    listFormatDto: new model.ListFormatUpdate({
        listId: 2
    }),
    index: 0
});

return wordsApi.updateParagraphListFormatOnline(updateRequest)
.then((updateRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of updateRequest: ", updateRequestResult);
});