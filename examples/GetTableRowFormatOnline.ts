const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const documentsDir = "./";
const request = new model.GetTableRowFormatOnlineRequest({
    document: fs.createReadStream(documentsDir + "Sample.docx"),
    tablePath: "sections/0/tables/2",
    index: 0
});

return wordsApi.getTableRowFormatOnline(request)
.then((requestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of request: ", requestResult);
});