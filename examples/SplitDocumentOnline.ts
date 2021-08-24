const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
let requestDocument = fs.createReadStream("Sample.docx");
const splitRequest = new model.SplitDocumentOnlineRequest({
    document: requestDocument,
    format: "text",
    destFileName: "/TestSplitDocument.text",
    from: 1,
    to: 2
});

wordsApi.splitDocumentOnline(splitRequest)
.then((splitRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of splitRequest: ", splitRequestResult);
});