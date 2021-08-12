const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const acceptRequest = new model.AcceptAllRevisionsRequest({
    name: "Sample.docx"
});

return wordsApi.acceptAllRevisions(acceptRequest)
.then((acceptRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of acceptRequest: ", acceptRequestResult);
});