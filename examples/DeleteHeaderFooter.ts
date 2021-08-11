const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const deleteRequest = new model.DeleteHeaderFooterRequest({
    name: "Sample.docx",
    sectionPath: "",
    index: 0
});

return wordsApi.deleteHeaderFooter(deleteRequest)
.then((deleteRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of deleteRequest: ", deleteRequestResult);
});