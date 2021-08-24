const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
let requestDocument = fs.createReadStream("Common/test_multi_pages.docx");
let requestSaveOptionsData = new model.SaveOptionsData({
    saveFormat: "pdf",
    fileName: "/TestSaveAs.pdf"
})
const saveRequest = new model.SaveAsOnlineRequest({
    document: requestDocument,
    saveOptionsData: requestSaveOptionsData
});

wordsApi.saveAsOnline(saveRequest)
.then((saveRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of saveRequest: ", saveRequestResult);
});