const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const bookmarkName = "aspose";

let requestDocument = fs.createReadStream("Sample.docx");
let requestBookmarkData = new model.BookmarkData({
    name: bookmarkName,
    text: "This will be the text for Aspose"
})
const updateRequest = new model.UpdateBookmarkOnlineRequest({
    document: requestDocument,
    bookmarkName: bookmarkName,
    bookmarkData: requestBookmarkData,
    destFileName: "Sample.docx"
});

wordsApi.updateBookmarkOnline(updateRequest)
.then((updateRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of updateRequest: ", updateRequestResult);
});