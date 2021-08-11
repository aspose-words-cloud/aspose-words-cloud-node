const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const documentsDir = "./";
const updateRequest = new model.UpdateTableCellFormatOnlineRequest({
    document: fs.createReadStream(documentsDir + "Sample.docx"),
    format: new model.TableCellFormat({
        bottomPadding: 5,
        fitText: true,
        horizontalMerge: model.TableCellFormat.HorizontalMergeEnum.First,
        wrapText: true
    }),
    tableRowPath: "sections/0/tables/2/rows/0",
    index: 0
});

return wordsApi.updateTableCellFormatOnline(updateRequest)
.then((updateRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of updateRequest: ", updateRequestResult);
});