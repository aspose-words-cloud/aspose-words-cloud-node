const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const remoteFileName = "Sample.docx";

const rejectRequest = new model.RejectAllRevisionsRequest({
    name: remoteFileName,
    destFileName: remoteFileName
});

return wordsApi.rejectAllRevisions(rejectRequest)
.then((rejectRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of rejectRequest: ", rejectRequestResult);
});