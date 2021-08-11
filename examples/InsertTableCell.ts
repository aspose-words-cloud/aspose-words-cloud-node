const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const insertRequest = new model.InsertTableCellRequest({
    name: "Sample.docx",
    cell: new model.TableCellInsert({
    }),
    tableRowPath: "sections/0/tables/2/rows/0"
});

return wordsApi.insertTableCell(insertRequest)
.then((insertRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of insertRequest: ", insertRequestResult);
});