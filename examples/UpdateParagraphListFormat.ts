const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
let requestListFormatDto = new model.ListFormatUpdate({
    listId: 2
})
const updateRequest = new model.UpdateParagraphListFormatRequest({
    name: "Sample.docx",
    index: 0,
    listFormatDto: requestListFormatDto
});

wordsApi.updateParagraphListFormat(updateRequest)
.then((updateRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of updateRequest: ", updateRequestResult);
});