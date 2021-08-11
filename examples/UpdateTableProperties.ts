const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const updateRequest = new model.UpdateTablePropertiesRequest({
    name: "Sample.docx",
    properties: new model.TableProperties({
        alignment: model.TableProperties.AlignmentEnum.Right,
        allowAutoFit: false,
        bidi: true,
        bottomPadding: 1.0,
        cellSpacing: 2.0,
        styleOptions: model.TableProperties.StyleOptionsEnum.ColumnBands
    }),
    index: 1
});

return wordsApi.updateTableProperties(updateRequest)
.then((updateRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of updateRequest: ", updateRequestResult);
});