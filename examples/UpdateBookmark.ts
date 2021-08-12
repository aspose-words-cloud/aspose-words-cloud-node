const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const bookmarkName = "aspose";

const updateRequest = new model.UpdateBookmarkRequest({
    name: "Sample.docx",
    bookmarkName: bookmarkName,
    bookmarkData: new model.BookmarkData({
        name: bookmarkName,
        text: "This will be the text for Aspose"
    })
});

return wordsApi.updateBookmark(updateRequest)
.then((updateRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of updateRequest: ", updateRequestResult);
});