const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
let requestDocument = fs.createReadStream("Sample.docx");
let requestCell = new model.TableCellInsert({
})
const insertRequest = new model.InsertTableCellOnlineRequest({
    document: requestDocument,
    cell: requestCell,
    tableRowPath: "sections/0/tables/2/rows/0"
});

wordsApi.insertTableCellOnline(insertRequest)
.then((insertRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of insertRequest: ", insertRequestResult);
});