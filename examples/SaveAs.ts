const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const saveRequest = new model.SaveAsRequest({
    name: "Sample.docx",
    saveOptionsData: new model.SaveOptionsData({
        saveFormat: "docx",
        fileName: "/TestSaveAsFromPdfToDoc.docx"
    })
});

return wordsApi.saveAs(saveRequest)
.then((saveRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of saveRequest: ", saveRequestResult);
});