const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const bookmarkName = "aspose";

let requestBookmarkData = new model.BookmarkData({
    name: bookmarkName,
    text: "This will be the text for Aspose"
})
const updateRequest = new model.UpdateBookmarkRequest({
    name: "Sample.docx",
    bookmarkName: bookmarkName,
    bookmarkData: requestBookmarkData
});

wordsApi.updateBookmark(updateRequest)
.then((updateRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of updateRequest: ", updateRequestResult);
});