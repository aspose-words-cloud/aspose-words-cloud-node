const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const request = new model.GetBookmarkByNameRequest({
    name: "Sample.docx",
    bookmarkName: "aspose"
});

return wordsApi.getBookmarkByName(request)
.then((requestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of request: ", requestResult);
});