const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const deleteRequest = new model.DeleteBorderRequest({
    name: "Sample.docx",
    borderType: "left",
    nodePath: "tables/1/rows/0/cells/0"
});

return wordsApi.deleteBorder(deleteRequest)
.then((deleteRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of deleteRequest: ", deleteRequestResult);
});