const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
let requestDocument = fs.createReadStream("Sample.docx");
const acceptRequest = new model.AcceptAllRevisionsOnlineRequest({
    document: requestDocument
});

wordsApi.acceptAllRevisionsOnline(acceptRequest)
.then((acceptRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of acceptRequest: ", acceptRequestResult);
});