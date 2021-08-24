const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const request = new model.GetBordersRequest({
    name: "Sample.docx",
    nodePath: "tables/1/rows/0/cells/0"
});

wordsApi.getBorders(request)
.then((requestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of request: ", requestResult);
});