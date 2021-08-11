const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const deleteRequest = new model.DeleteRunRequest({
    name: "Sample.docx",
    paragraphPath: "paragraphs/1",
    index: 0
});

return wordsApi.deleteRun(deleteRequest)
.then((deleteRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of deleteRequest: ", deleteRequestResult);
});