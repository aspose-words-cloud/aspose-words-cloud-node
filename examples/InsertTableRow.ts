const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const insertRequest = new model.InsertTableRowRequest({
    name: "Sample.docx",
    row: new model.TableRowInsert({
        columnsCount: 5
    }),
    tablePath: "sections/0/tables/2"
});

return wordsApi.insertTableRow(insertRequest)
.then((insertRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of insertRequest: ", insertRequestResult);
});