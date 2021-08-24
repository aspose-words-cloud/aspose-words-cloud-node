const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
let requestDocument = fs.createReadStream("Sample.docx");
const request = new model.GetFieldOnlineRequest({
    document: requestDocument,
    index: 0,
    nodePath: "sections/0/paragraphs/0"
});

wordsApi.getFieldOnline(request)
.then((requestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of request: ", requestResult);
});