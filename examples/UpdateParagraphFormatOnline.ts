const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
let requestDocument = fs.createReadStream("Sample.docx");
let requestParagraphFormatDto = new model.ParagraphFormatUpdate({
    alignment: model.ParagraphFormatUpdate.AlignmentEnum.Right
})
const updateRequest = new model.UpdateParagraphFormatOnlineRequest({
    document: requestDocument,
    index: 0,
    paragraphFormatDto: requestParagraphFormatDto
});

wordsApi.updateParagraphFormatOnline(updateRequest)
.then((updateRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of updateRequest: ", updateRequestResult);
});