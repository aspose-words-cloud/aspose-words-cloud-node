const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const documentsDir = "./";
const updateRequest = new model.UpdateParagraphFormatOnlineRequest({
    document: fs.createReadStream(documentsDir + "Sample.docx"),
    index: 0,
    paragraphFormatDto: new model.ParagraphFormatUpdate({
        alignment: model.ParagraphFormatUpdate.AlignmentEnum.Right
    })
});

return wordsApi.updateParagraphFormatOnline(updateRequest)
.then((updateRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of updateRequest: ", updateRequestResult);
});