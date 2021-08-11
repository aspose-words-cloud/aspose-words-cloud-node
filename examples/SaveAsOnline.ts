const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const documentsDir = "./";
const saveRequest = new model.SaveAsOnlineRequest({
    document: fs.createReadStream(documentsDir + "Common/test_multi_pages.docx"),
    saveOptionsData: new model.SaveOptionsData({
        saveFormat: "pdf",
        fileName: "/TestSaveAs.pdf"
    })
});

return wordsApi.saveAsOnline(saveRequest)
.then((saveRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of saveRequest: ", saveRequestResult);
});