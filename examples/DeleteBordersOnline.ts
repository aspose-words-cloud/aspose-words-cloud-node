const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const documentsDir = "./";
const deleteRequest = new model.DeleteBordersOnlineRequest({
    document: fs.createReadStream(documentsDir + "Sample.docx"),
    nodePath: "tables/1/rows/0/cells/0"
});

return wordsApi.deleteBordersOnline(deleteRequest)
.then((deleteRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of deleteRequest: ", deleteRequestResult);
});