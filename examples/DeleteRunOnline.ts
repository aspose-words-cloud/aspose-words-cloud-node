const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
let requestDocument = fs.createReadStream("Sample.doc");
const deleteRequest = new model.DeleteRunOnlineRequest({
    document: requestDocument,
    paragraphPath: "paragraphs/1",
    index: 0
});

wordsApi.deleteRunOnline(deleteRequest)
.then((deleteRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of deleteRequest: ", deleteRequestResult);
});