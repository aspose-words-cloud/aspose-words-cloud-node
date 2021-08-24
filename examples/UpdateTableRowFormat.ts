const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
let requestFormat = new model.TableRowFormat({
    allowBreakAcrossPages: true,
    headingFormat: true,
    height: 10.0,
    heightRule: model.TableRowFormat.HeightRuleEnum.Exactly
})
const updateRequest = new model.UpdateTableRowFormatRequest({
    name: "Sample.docx",
    format: requestFormat,
    tablePath: "sections/0/tables/2",
    index: 0
});

wordsApi.updateTableRowFormat(updateRequest)
.then((updateRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of updateRequest: ", updateRequestResult);
});