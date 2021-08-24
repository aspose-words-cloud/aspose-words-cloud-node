const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const request = new model.GetTableRowFormatRequest({
    name: "Sample.docx",
    tablePath: "sections/0/tables/2",
    index: 0
});

wordsApi.getTableRowFormat(request)
.then((requestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of request: ", requestResult);
});