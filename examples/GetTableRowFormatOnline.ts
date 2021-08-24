const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
let requestDocument = fs.createReadStream("Sample.docx");
const request = new model.GetTableRowFormatOnlineRequest({
    document: requestDocument,
    tablePath: "sections/0/tables/2",
    index: 0
});

wordsApi.getTableRowFormatOnline(request)
.then((requestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of request: ", requestResult);
});