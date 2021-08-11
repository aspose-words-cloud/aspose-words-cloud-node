const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const deleteRequest = new model.DeleteBordersRequest({
    name: "Sample.docx",
    nodePath: "tables/1/rows/0/cells/0"
});

return wordsApi.deleteBorders(deleteRequest)
.then((deleteRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of deleteRequest: ", deleteRequestResult);
});