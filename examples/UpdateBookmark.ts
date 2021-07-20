const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const remoteFileName = "Sample.docx";
const bookmarkName = "aspose";

const updateBookmark = new model.UpdateBookmarkRequest({
    name: remoteFileName,
    bookmarkName: bookmarkName,
    bookmarkData: new model.BookmarkData({
        name: bookmarkName,
        text: "New Bookmark Text"
    })
});

return wordsApi.updateBookmark(updateBookmark)
.then((updateBookmarkResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of UpdateBookmark: ", updateBookmarkResult);
});