const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const documentsDir = "./";
const request = new model.GetBookmarksOnlineRequest({
    document: fs.createReadStream(documentsDir + "Sample.docx")
});

return wordsApi.getBookmarksOnline(request)
.then((requestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of request: ", requestResult);
});