const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
let requestDocument = fs.createReadStream("Sample.docx");
const request = new model.GetBookmarkByNameOnlineRequest({
    document: requestDocument,
    bookmarkName: "aspose"
});

wordsApi.getBookmarkByNameOnline(request)
.then((requestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of request: ", requestResult);
});