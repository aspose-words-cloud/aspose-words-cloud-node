const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
let requestTemplate = fs.createReadStream("Sample.docx");
const request = new model.GetDocumentFieldNamesOnlineRequest({
    template: requestTemplate,
    useNonMergeFields: true
});

wordsApi.getDocumentFieldNamesOnline(request)
.then((requestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of request: ", requestResult);
});