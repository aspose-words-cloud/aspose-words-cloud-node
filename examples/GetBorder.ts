const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const request = new model.GetBorderRequest({
    name: "Sample.docx",
    borderType: "left",
    nodePath: "tables/1/rows/0/cells/0"
});

return wordsApi.getBorder(request)
.then((requestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of request: ", requestResult);
});