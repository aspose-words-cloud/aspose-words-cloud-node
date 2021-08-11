const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const documentsDir = "./";
const updateRequest = new model.UpdateTableRowFormatOnlineRequest({
    document: fs.createReadStream(documentsDir + "Sample.docx"),
    format: new model.TableRowFormat({
        allowBreakAcrossPages: true,
        headingFormat: true,
        height: 10,
        heightRule: model.TableRowFormat.HeightRuleEnum.Auto
    }),
    tablePath: "sections/0/tables/2",
    index: 0
});

return wordsApi.updateTableRowFormatOnline(updateRequest)
.then((updateRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of updateRequest: ", updateRequestResult);
});