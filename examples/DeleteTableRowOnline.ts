const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const documentsDir = "./";
const deleteRequest = new model.DeleteTableRowOnlineRequest({
    document: fs.createReadStream(documentsDir + "Sample.docx"),
    tablePath: "tables/1",
    index: 0
});

return wordsApi.deleteTableRowOnline(deleteRequest)
.then((deleteRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of deleteRequest: ", deleteRequestResult);
});