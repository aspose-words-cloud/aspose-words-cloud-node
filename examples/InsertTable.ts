const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
let requestTable = new model.TableInsert({
    columnsCount: 5,
    rowsCount: 4
})
const insertRequest = new model.InsertTableRequest({
    name: "Sample.docx",
    table: requestTable
});

wordsApi.insertTable(insertRequest)
.then((insertRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of insertRequest: ", insertRequestResult);
});