const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const loadRequest = new model.LoadWebDocumentRequest({
    data: new model.LoadWebDocumentData({
        loadingDocumentUrl: "http://google.com",
        saveOptions: new model.SaveOptionsData({
            fileName: "google.doc",
            saveFormat: "doc",
            dmlEffectsRenderingMode: "1",
            dmlRenderingMode: "1",
            updateSdtContent: false,
            zipOutput: false
        })
    })
});

return wordsApi.loadWebDocument(loadRequest)
.then((loadRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of loadRequest: ", loadRequestResult);
});