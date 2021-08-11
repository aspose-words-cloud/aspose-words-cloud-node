const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const remoteFileName = "Sample.docx";

const deleteRequest = new model.DeleteCommentsRequest({
    name: remoteFileName,
    destFileName: remoteFileName
});

return wordsApi.deleteComments(deleteRequest)
.then((deleteRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of deleteRequest: ", deleteRequestResult);
});