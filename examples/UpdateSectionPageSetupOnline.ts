const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const documentsDir = "./";
const updateRequest = new model.UpdateSectionPageSetupOnlineRequest({
    document: fs.createReadStream(documentsDir + "Sample.docx"),
    sectionIndex: 0,
    pageSetup: new model.PageSetup({
        rtlGutter: true,
        leftMargin: 10,
        orientation: model.PageSetup.OrientationEnum.Landscape,
        paperSize: model.PageSetup.PaperSizeEnum.A5
    })
});

return wordsApi.updateSectionPageSetupOnline(updateRequest)
.then((updateRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of updateRequest: ", updateRequestResult);
});