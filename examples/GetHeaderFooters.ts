const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const request = new model.GetHeaderFootersRequest({
    name: "Sample.docx",
    sectionPath: ""
});

wordsApi.getHeaderFooters(request)
.then((requestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of request: ", requestResult);
});