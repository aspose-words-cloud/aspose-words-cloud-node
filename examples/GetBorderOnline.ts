const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
let requestDocument = fs.createReadStream("Sample.docx");
const request = new model.GetBorderOnlineRequest({
    document: requestDocument,
    borderType: "left",
    nodePath: "tables/1/rows/0/cells/0"
});

wordsApi.getBorderOnline(request)
.then((requestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of request: ", requestResult);
});