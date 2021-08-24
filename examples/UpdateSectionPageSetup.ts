const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
let requestPageSetup = new model.PageSetup({
    rtlGutter: true,
    leftMargin: 10.0,
    orientation: model.PageSetup.OrientationEnum.Landscape,
    paperSize: model.PageSetup.PaperSizeEnum.A5
})
const updateRequest = new model.UpdateSectionPageSetupRequest({
    name: "Sample.docx",
    sectionIndex: 0,
    pageSetup: requestPageSetup
});

wordsApi.updateSectionPageSetup(updateRequest)
.then((updateRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of updateRequest: ", updateRequestResult);
});