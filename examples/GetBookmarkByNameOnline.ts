const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const documentsDir = "./";
const request = new model.GetBookmarkByNameOnlineRequest({
    document: fs.createReadStream(documentsDir + "Sample.docx"),
    bookmarkName: "aspose"
});

return wordsApi.getBookmarkByNameOnline(request)
.then((requestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of request: ", requestResult);
});