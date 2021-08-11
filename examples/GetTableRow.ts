const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const request = new model.GetTableRowRequest({
    name: "Sample.docx",
    tablePath: "tables/1",
    index: 0
});

return wordsApi.getTableRow(request)
.then((requestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of request: ", requestResult);
});