const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const documentsDir = "./";
const insertRequest = new model.InsertTableOnlineRequest({
    document: fs.createReadStream(documentsDir + "Sample.docx"),
    table: new model.TableInsert({
        columnsCount: 5,
        rowsCount: 4
    })
});

return wordsApi.insertTableOnline(insertRequest)
.then((insertRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of insertRequest: ", insertRequestResult);
});