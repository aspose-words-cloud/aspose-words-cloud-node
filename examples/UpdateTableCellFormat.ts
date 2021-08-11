const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const updateRequest = new model.UpdateTableCellFormatRequest({
    name: "Sample.docx",
    format: new model.TableCellFormat({
        bottomPadding: 5.0,
        fitText: true,
        horizontalMerge: model.TableCellFormat.HorizontalMergeEnum.First,
        wrapText: true
    }),
    tableRowPath: "sections/0/tables/2/rows/0",
    index: 0
});

return wordsApi.updateTableCellFormat(updateRequest)
.then((updateRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of updateRequest: ", updateRequestResult);
});