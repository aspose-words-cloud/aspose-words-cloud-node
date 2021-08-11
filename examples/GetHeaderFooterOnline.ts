const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const documentsDir = "./";
const request = new model.GetHeaderFooterOnlineRequest({
    document: fs.createReadStream(documentsDir + "DocumentElements/HeaderFooters/HeadersFooters.doc"),
    headerFooterIndex: 0
});

return wordsApi.getHeaderFooterOnline(request)
.then((requestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of request: ", requestResult);
});