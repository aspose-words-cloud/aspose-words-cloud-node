const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
let requestDocument = fs.createReadStream("Sample.docx");
let requestRow = new model.TableRowInsert({
    columnsCount: 5
})
const insertRequest = new model.InsertTableRowOnlineRequest({
    document: requestDocument,
    row: requestRow,
    tablePath: "sections/0/tables/2"
});

wordsApi.insertTableRowOnline(insertRequest)
.then((insertRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of insertRequest: ", insertRequestResult);
});