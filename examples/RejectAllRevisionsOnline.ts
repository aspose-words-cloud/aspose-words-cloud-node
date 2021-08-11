const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const documentsDir = "./";
const rejectRequest = new model.RejectAllRevisionsOnlineRequest({
    document: fs.createReadStream(documentsDir + "Sample.docx")
});

return wordsApi.rejectAllRevisionsOnline(rejectRequest)
.then((rejectRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of rejectRequest: ", rejectRequestResult);
});