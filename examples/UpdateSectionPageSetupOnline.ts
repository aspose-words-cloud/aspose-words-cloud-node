const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
let requestDocument = fs.createReadStream("Sample.docx");
let requestPageSetup = new model.PageSetup({
    rtlGutter: true,
    leftMargin: 10,
    orientation: model.PageSetup.OrientationEnum.Landscape,
    paperSize: model.PageSetup.PaperSizeEnum.A5
})
const updateRequest = new model.UpdateSectionPageSetupOnlineRequest({
    document: requestDocument,
    sectionIndex: 0,
    pageSetup: requestPageSetup
});

wordsApi.updateSectionPageSetupOnline(updateRequest)
.then((updateRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of updateRequest: ", updateRequestResult);
});