const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const documentsDir = "./";
const insertRequest = new model.InsertTableRowOnlineRequest({
    document: fs.createReadStream(documentsDir + "Sample.docx"),
    row: new model.TableRowInsert({
        columnsCount: 5
    }),
    tablePath: "sections/0/tables/2"
});

return wordsApi.insertTableRowOnline(insertRequest)
.then((insertRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of insertRequest: ", insertRequestResult);
});