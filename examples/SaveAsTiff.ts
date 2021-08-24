const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
let requestSaveOptions = new model.TiffSaveOptionsData({
    saveFormat: "tiff",
    fileName: "/abc.tiff"
})
const saveRequest = new model.SaveAsTiffRequest({
    name: "Sample.docx",
    saveOptions: requestSaveOptions
});

wordsApi.saveAsTiff(saveRequest)
.then((saveRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of saveRequest: ", saveRequestResult);
});