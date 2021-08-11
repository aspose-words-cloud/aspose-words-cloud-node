const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const documentsDir = "./";
const searchRequest = new model.SearchOnlineRequest({
    document: fs.createReadStream(documentsDir + "Sample.docx"),
    pattern: "aspose"
});

return wordsApi.searchOnline(searchRequest)
.then((searchRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of searchRequest: ", searchRequestResult);
});