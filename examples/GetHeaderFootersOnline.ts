const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const documentsDir = "./";
const request = new model.GetHeaderFootersOnlineRequest({
    document: fs.createReadStream(documentsDir + "Sample.doc"),
    sectionPath: ""
});

return wordsApi.getHeaderFootersOnline(request)
.then((requestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of request: ", requestResult);
});