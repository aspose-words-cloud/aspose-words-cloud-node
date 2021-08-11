const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const documentsDir = "./";
const request = new model.GetBordersOnlineRequest({
    document: fs.createReadStream(documentsDir + "Sample.docx"),
    nodePath: "tables/1/rows/0/cells/0"
});

return wordsApi.getBordersOnline(request)
.then((requestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of request: ", requestResult);
});