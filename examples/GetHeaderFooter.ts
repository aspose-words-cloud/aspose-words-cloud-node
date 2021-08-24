const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const request = new model.GetHeaderFooterRequest({
    name: "Sample.docx",
    headerFooterIndex: 0
});

wordsApi.getHeaderFooter(request)
.then((requestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of request: ", requestResult);
});