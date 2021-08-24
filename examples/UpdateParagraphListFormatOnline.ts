const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
let requestDocument = fs.createReadStream("Sample.doc");
let requestListFormatDto = new model.ListFormatUpdate({
    listId: 2
})
const updateRequest = new model.UpdateParagraphListFormatOnlineRequest({
    document: requestDocument,
    listFormatDto: requestListFormatDto,
    index: 0
});

wordsApi.updateParagraphListFormatOnline(updateRequest)
.then((updateRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of updateRequest: ", updateRequestResult);
});