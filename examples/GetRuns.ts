const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const request = new model.GetRunsRequest({
    name: "Sample.docx",
    paragraphPath: "sections/0/paragraphs/0"
});

wordsApi.getRuns(request)
.then((requestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of request: ", requestResult);
});