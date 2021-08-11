const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const documentsDir = "./";
const updateRequest = new model.UpdateTablePropertiesOnlineRequest({
    document: fs.createReadStream(documentsDir + "Sample.docx"),
    properties: new model.TableProperties({
        alignment: model.TableProperties.AlignmentEnum.Right,
        allowAutoFit: false,
        bidi: true,
        bottomPadding: 1,
        cellSpacing: 2,
        styleOptions: model.TableProperties.StyleOptionsEnum.ColumnBands
    }),
    index: 1,
    nodePath: ""
});

return wordsApi.updateTablePropertiesOnline(updateRequest)
.then((updateRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of updateRequest: ", updateRequestResult);
});