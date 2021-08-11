const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const remoteFileName = "Sample.docx";

const deleteRequest = new model.DeleteFormFieldRequest({
    name: remoteFileName,
    index: 0,
    destFileName: remoteFileName
});

return wordsApi.deleteFormField(deleteRequest)
.then((deleteRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of deleteRequest: ", deleteRequestResult);
});