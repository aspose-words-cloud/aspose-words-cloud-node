const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const deleteRequest = new model.DeleteDocumentPropertyRequest({
    name: "Sample.docx",
    propertyName: "testProp"
});

wordsApi.deleteDocumentProperty(deleteRequest)
.then((deleteRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of deleteRequest: ", deleteRequestResult);
});