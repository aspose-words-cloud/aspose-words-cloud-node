const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
let requestDocument = fs.createReadStream("Common/test_multi_pages.docx");
let requestSaveOptions = new model.TiffSaveOptionsData({
    saveFormat: "tiff",
    fileName: "/abc.tiff"
})
const saveRequest = new model.SaveAsTiffOnlineRequest({
    document: requestDocument,
    saveOptions: requestSaveOptions
});

wordsApi.saveAsTiffOnline(saveRequest)
.then((saveRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of saveRequest: ", saveRequestResult);
});