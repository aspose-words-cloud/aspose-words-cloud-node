const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const rejectRequest = new model.RejectAllRevisionsRequest({
    name: "Sample.docx"
});

wordsApi.rejectAllRevisions(rejectRequest)
.then((rejectRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of rejectRequest: ", rejectRequestResult);
});