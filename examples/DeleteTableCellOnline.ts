const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
let requestDocument = fs.createReadStream("Sample.docx");
const deleteRequest = new model.DeleteTableCellOnlineRequest({
    document: requestDocument,
    tableRowPath: "sections/0/tables/2/rows/0",
    index: 0
});

wordsApi.deleteTableCellOnline(deleteRequest)
.then((deleteRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of deleteRequest: ", deleteRequestResult);
});