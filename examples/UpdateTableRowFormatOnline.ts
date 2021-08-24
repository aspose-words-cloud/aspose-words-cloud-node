const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
let requestDocument = fs.createReadStream("Sample.docx");
let requestFormat = new model.TableRowFormat({
    allowBreakAcrossPages: true,
    headingFormat: true,
    height: 10,
    heightRule: model.TableRowFormat.HeightRuleEnum.Auto
})
const updateRequest = new model.UpdateTableRowFormatOnlineRequest({
    document: requestDocument,
    format: requestFormat,
    tablePath: "sections/0/tables/2",
    index: 0
});

wordsApi.updateTableRowFormatOnline(updateRequest)
.then((updateRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of updateRequest: ", updateRequestResult);
});