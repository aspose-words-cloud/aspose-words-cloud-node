const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const request = new model.GetTableCellFormatRequest({
    name: "Sample.docx",
    tableRowPath: "sections/0/tables/2/rows/0",
    index: 0
});

wordsApi.getTableCellFormat(request)
.then((requestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of request: ", requestResult);
});