const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const documentsDir = "./";
const deleteRequest = new model.DeleteBorderOnlineRequest({
    document: fs.createReadStream(documentsDir + "Sample.docx"),
    borderType: "left",
    nodePath: "tables/1/rows/0/cells/0"
});

return wordsApi.deleteBorderOnline(deleteRequest)
.then((deleteRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of deleteRequest: ", deleteRequestResult);
});