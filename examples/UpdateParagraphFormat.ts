const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const updateRequest = new model.UpdateParagraphFormatRequest({
    name: "Sample.docx",
    index: 0,
    paragraphFormatDto: new model.ParagraphFormatUpdate({
        alignment: model.ParagraphFormatUpdate.AlignmentEnum.Right
    })
});

return wordsApi.updateParagraphFormat(updateRequest)
.then((updateRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of updateRequest: ", updateRequestResult);
});