const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const remoteFileName = "Sample.docx";

const updateRequest = new model.UpdateBookmarkRequest({
    name: remoteFileName,
    bookmarkName: bookmarkName,
    bookmarkData: new model.BookmarkData({
        name: bookmarkName,
        text: "This will be the text for Aspose"
    }),
    destFileName: remoteFileName
});

return wordsApi.updateBookmark(updateRequest)
.then((updateRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of updateRequest: ", updateRequestResult);
});