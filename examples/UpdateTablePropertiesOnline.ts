const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
let requestDocument = fs.createReadStream("Sample.docx");
let requestProperties = new model.TableProperties({
    alignment: model.TableProperties.AlignmentEnum.Right,
    allowAutoFit: false,
    bidi: true,
    bottomPadding: 1,
    cellSpacing: 2,
    styleOptions: model.TableProperties.StyleOptionsEnum.ColumnBands
})
const updateRequest = new model.UpdateTablePropertiesOnlineRequest({
    document: requestDocument,
    properties: requestProperties,
    index: 1
});

wordsApi.updateTablePropertiesOnline(updateRequest)
.then((updateRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of updateRequest: ", updateRequestResult);
});