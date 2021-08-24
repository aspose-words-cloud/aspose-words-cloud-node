const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
let requestDocument = fs.createReadStream("Sample.docx");
const searchRequest = new model.SearchOnlineRequest({
    document: requestDocument,
    pattern: "aspose"
});

wordsApi.searchOnline(searchRequest)
.then((searchRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of searchRequest: ", searchRequestResult);
});