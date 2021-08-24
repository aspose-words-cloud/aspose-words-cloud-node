const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
let requestDocument = fs.createReadStream("Sample.doc");
const request = new model.GetHeaderFooterOfSectionOnlineRequest({
    document: requestDocument,
    headerFooterIndex: 0,
    sectionIndex: 0
});

wordsApi.getHeaderFooterOfSectionOnline(request)
.then((requestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of request: ", requestResult);
});