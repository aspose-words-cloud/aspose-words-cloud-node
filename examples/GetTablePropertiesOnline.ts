const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
let requestDocument = fs.createReadStream("Sample.docx");
const request = new model.GetTablePropertiesOnlineRequest({
    document: requestDocument,
    index: 1
});

wordsApi.getTablePropertiesOnline(request)
.then((requestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of request: ", requestResult);
});