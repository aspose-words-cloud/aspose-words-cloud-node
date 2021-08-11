const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const documentsDir = "./";
const saveRequest = new model.SaveAsTiffOnlineRequest({
    document: fs.createReadStream(documentsDir + "Common/test_multi_pages.docx"),
    saveOptions: new model.TiffSaveOptionsData({
        saveFormat: "tiff",
        fileName: "/abc.tiff"
    })
});

return wordsApi.saveAsTiffOnline(saveRequest)
.then((saveRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of saveRequest: ", saveRequestResult);
});