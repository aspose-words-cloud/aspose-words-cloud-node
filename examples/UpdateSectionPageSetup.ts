const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const updateRequest = new model.UpdateSectionPageSetupRequest({
    name: "Sample.docx",
    sectionIndex: 0,
    pageSetup: new model.PageSetup({
        rtlGutter: true,
        leftMargin: 10.0,
        orientation: model.PageSetup.OrientationEnum.Landscape,
        paperSize: model.PageSetup.PaperSizeEnum.A5
    })
});

return wordsApi.updateSectionPageSetup(updateRequest)
.then((updateRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of updateRequest: ", updateRequestResult);
});