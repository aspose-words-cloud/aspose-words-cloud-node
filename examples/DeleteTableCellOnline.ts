const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const documentsDir = "./";
const deleteRequest = new model.DeleteTableCellOnlineRequest({
    document: fs.createReadStream(documentsDir + "Sample.docx"),
    tableRowPath: "sections/0/tables/2/rows/0",
    index: 0
});

return wordsApi.deleteTableCellOnline(deleteRequest)
.then((deleteRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of deleteRequest: ", deleteRequestResult);
});