const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const deleteRequest = new model.DeleteParagraphTabStopRequest({
    name: "Sample.docx",
    position: 72.0,
    index: 0
});

return wordsApi.deleteParagraphTabStop(deleteRequest)
.then((deleteRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of deleteRequest: ", deleteRequestResult);
});