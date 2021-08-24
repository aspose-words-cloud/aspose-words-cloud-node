const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
let requestSaveOptionsData = new model.SaveOptionsData({
    saveFormat: "docx",
    fileName: "/TestSaveAsFromPdfToDoc.docx"
})
const saveRequest = new model.SaveAsRequest({
    name: "Sample.docx",
    saveOptionsData: requestSaveOptionsData
});

wordsApi.saveAs(saveRequest)
.then((saveRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of saveRequest: ", saveRequestResult);
});