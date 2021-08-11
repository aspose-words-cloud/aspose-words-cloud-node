const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const request = new model.GetRunRequest({
    name: "Sample.docx",
    paragraphPath: "paragraphs/0",
    index: 0
});

return wordsApi.getRun(request)
.then((requestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of request: ", requestResult);
});