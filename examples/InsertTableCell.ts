const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
let requestCell = new model.TableCellInsert({
})
const insertRequest = new model.InsertTableCellRequest({
    name: "Sample.docx",
    cell: requestCell,
    tableRowPath: "sections/0/tables/2/rows/0"
});

wordsApi.insertTableCell(insertRequest)
.then((insertRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of insertRequest: ", insertRequestResult);
});