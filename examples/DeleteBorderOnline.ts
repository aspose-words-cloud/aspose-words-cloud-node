const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
let requestDocument = fs.createReadStream("Sample.docx");
const deleteRequest = new model.DeleteBorderOnlineRequest({
    document: requestDocument,
    borderType: "left",
    nodePath: "tables/1/rows/0/cells/0"
});

wordsApi.deleteBorderOnline(deleteRequest)
.then((deleteRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of deleteRequest: ", deleteRequestResult);
});