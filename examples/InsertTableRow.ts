const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
let requestRow = new model.TableRowInsert({
    columnsCount: 5
})
const insertRequest = new model.InsertTableRowRequest({
    name: "Sample.docx",
    row: requestRow,
    tablePath: "sections/0/tables/2"
});

wordsApi.insertTableRow(insertRequest)
.then((insertRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of insertRequest: ", insertRequestResult);
});