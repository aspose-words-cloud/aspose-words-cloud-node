const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const remoteFileName = "Sample.docx";

const deleteRequest = new model.DeleteDocumentPropertyRequest({
    name: remoteFileName,
    propertyName: "testProp",
    destFileName: remoteFileName
});

return wordsApi.deleteDocumentProperty(deleteRequest)
.then((deleteRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of deleteRequest: ", deleteRequestResult);
});