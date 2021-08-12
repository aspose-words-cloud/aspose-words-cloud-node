const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const documentsDir = "./";
const deleteRequest = new model.DeleteParagraphListFormatOnlineRequest({
    document: fs.createReadStream(documentsDir + "Sample.doc"),
    index: 0
});

return wordsApi.deleteParagraphListFormatOnline(deleteRequest)
.then((deleteRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of deleteRequest: ", deleteRequestResult);
});