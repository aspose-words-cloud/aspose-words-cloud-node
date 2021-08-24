const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
let requestDocument = fs.createReadStream("Sample.docx");
const request = new model.GetTableCellFormatOnlineRequest({
    document: requestDocument,
    tableRowPath: "sections/0/tables/2/rows/0",
    index: 0
});

wordsApi.getTableCellFormatOnline(request)
.then((requestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of request: ", requestResult);
});