const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const documentsDir = "./";
const request = new model.GetHeaderFooterOfSectionOnlineRequest({
    document: fs.createReadStream(documentsDir + "Sample.doc"),
    headerFooterIndex: 0,
    sectionIndex: 0
});

return wordsApi.getHeaderFooterOfSectionOnline(request)
.then((requestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of request: ", requestResult);
});