const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const documentsDir = "./";
const insertRequest = new model.InsertTableCellOnlineRequest({
    document: fs.createReadStream(documentsDir + "Sample.docx"),
    cell: new model.TableCellInsert({
    }),
    tableRowPath: "sections/0/tables/2/rows/0"
});

return wordsApi.insertTableCellOnline(insertRequest)
.then((insertRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of insertRequest: ", insertRequestResult);
});