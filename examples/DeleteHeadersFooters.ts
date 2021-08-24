const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const deleteRequest = new model.DeleteHeadersFootersRequest({
    name: "Sample.docx",
    sectionPath: ""
});

wordsApi.deleteHeadersFooters(deleteRequest)
.then((deleteRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of deleteRequest: ", deleteRequestResult);
});