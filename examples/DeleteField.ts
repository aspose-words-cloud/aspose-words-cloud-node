const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const deleteRequest = new model.DeleteFieldRequest({
    name: "Sample.docx",
    index: 0
});

wordsApi.deleteField(deleteRequest)
.then((deleteRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of deleteRequest: ", deleteRequestResult);
});