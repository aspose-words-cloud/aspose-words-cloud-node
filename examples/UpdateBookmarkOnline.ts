const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const documentsDir = "./";
const updateRequest = new model.UpdateBookmarkOnlineRequest({
    document: fs.createReadStream(documentsDir + "Sample.docx"),
    bookmarkName: bookmarkName,
    bookmarkData: new model.BookmarkData({
        name: bookmarkName,
        text: "This will be the text for Aspose"
    }),
    destFileName: "Sample.docx"
});

return wordsApi.updateBookmarkOnline(updateRequest)
.then((updateRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of updateRequest: ", updateRequestResult);
});