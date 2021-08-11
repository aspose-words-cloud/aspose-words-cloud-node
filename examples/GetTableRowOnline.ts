const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const documentsDir = "./";
const request = new model.GetTableRowOnlineRequest({
    document: fs.createReadStream(documentsDir + "Sample.docx"),
    tablePath: "tables/1",
    index: 0
});

return wordsApi.getTableRowOnline(request)
.then((requestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of request: ", requestResult);
});