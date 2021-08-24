const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
let requestParagraphFormatDto = new model.ParagraphFormatUpdate({
    alignment: model.ParagraphFormatUpdate.AlignmentEnum.Right
})
const updateRequest = new model.UpdateParagraphFormatRequest({
    name: "Sample.docx",
    index: 0,
    paragraphFormatDto: requestParagraphFormatDto
});

wordsApi.updateParagraphFormat(updateRequest)
.then((updateRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of updateRequest: ", updateRequestResult);
});