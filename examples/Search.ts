const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const searchRequest = new model.SearchRequest({
    name: "Sample.docx",
    pattern: "aspose"
});

return wordsApi.search(searchRequest)
.then((searchRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of searchRequest: ", searchRequestResult);
});