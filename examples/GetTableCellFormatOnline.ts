const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const documentsDir = "./";
const request = new model.GetTableCellFormatOnlineRequest({
    document: fs.createReadStream(documentsDir + "Sample.docx"),
    tableRowPath: "sections/0/tables/2/rows/0",
    index: 0
});

return wordsApi.getTableCellFormatOnline(request)
.then((requestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of request: ", requestResult);
});