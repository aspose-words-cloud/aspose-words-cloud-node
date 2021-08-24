const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
let requestDocument = fs.createReadStream("Sample.doc");
const request = new model.GetParagraphListFormatOnlineRequest({
    document: requestDocument,
    index: 0
});

wordsApi.getParagraphListFormatOnline(request)
.then((requestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of request: ", requestResult);
});