const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const updateRequest = new model.UpdateTableRowFormatRequest({
    name: "Sample.docx",
    format: new model.TableRowFormat({
        allowBreakAcrossPages: true,
        headingFormat: true,
        height: 10.0,
        heightRule: model.TableRowFormat.HeightRuleEnum.Exactly
    }),
    tablePath: "sections/0/tables/2",
    index: 0
});

return wordsApi.updateTableRowFormat(updateRequest)
.then((updateRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of updateRequest: ", updateRequestResult);
});