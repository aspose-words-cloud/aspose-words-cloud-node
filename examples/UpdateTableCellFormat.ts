const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
let requestFormat = new model.TableCellFormat({
    bottomPadding: 5.0,
    fitText: true,
    horizontalMerge: model.TableCellFormat.HorizontalMergeEnum.First,
    wrapText: true
})
const updateRequest = new model.UpdateTableCellFormatRequest({
    name: "Sample.docx",
    format: requestFormat,
    tableRowPath: "sections/0/tables/2/rows/0",
    index: 0
});

wordsApi.updateTableCellFormat(updateRequest)
.then((updateRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of updateRequest: ", updateRequestResult);
});