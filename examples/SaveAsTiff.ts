const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const saveRequest = new model.SaveAsTiffRequest({
    name: "Sample.docx",
    saveOptions: new model.TiffSaveOptionsData({
        saveFormat: "tiff",
        fileName: "/abc.tiff"
    })
});

return wordsApi.saveAsTiff(saveRequest)
.then((saveRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of saveRequest: ", saveRequestResult);
});