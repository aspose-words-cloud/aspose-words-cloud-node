const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
let requestDocument = fs.createReadStream("Sample.docx");
const rejectRequest = new model.RejectAllRevisionsOnlineRequest({
    document: requestDocument
});

wordsApi.rejectAllRevisionsOnline(rejectRequest)
.then((rejectRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of rejectRequest: ", rejectRequestResult);
});