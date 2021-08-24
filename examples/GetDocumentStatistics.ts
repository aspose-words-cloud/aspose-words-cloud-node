const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const request = new model.GetDocumentStatisticsRequest({
    name: "Sample.docx"
});

wordsApi.getDocumentStatistics(request)
.then((requestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of request: ", requestResult);
});