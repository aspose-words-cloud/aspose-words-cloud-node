const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const documentsDir = "./";
const request = new model.GetTableOnlineRequest({
    document: fs.createReadStream(documentsDir + "Sample.docx"),
    index: 1,
    nodePath: ""
});

return wordsApi.getTableOnline(request)
.then((requestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of request: ", requestResult);
});