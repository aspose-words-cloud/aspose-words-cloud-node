const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const documentsDir = "./";
const request = new model.GetCommentOnlineRequest({
    document: fs.createReadStream(documentsDir + "Sample.docx"),
    commentIndex: 0
});

return wordsApi.getCommentOnline(request)
.then((requestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of request: ", requestResult);
});