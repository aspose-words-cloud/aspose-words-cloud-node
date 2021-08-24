const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
let requestDocument = fs.createReadStream("Sample.docx");
let requestTable = new model.TableInsert({
    columnsCount: 5,
    rowsCount: 4
})
const insertRequest = new model.InsertTableOnlineRequest({
    document: requestDocument,
    table: requestTable
});

wordsApi.insertTableOnline(insertRequest)
.then((insertRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of insertRequest: ", insertRequestResult);
});