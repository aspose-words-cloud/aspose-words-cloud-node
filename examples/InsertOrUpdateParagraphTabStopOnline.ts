const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const documentsDir = "./";
const insertRequest = new model.InsertOrUpdateParagraphTabStopOnlineRequest({
    document: fs.createReadStream(documentsDir + "/ParagraphTabStops.docx"),
    tabStopInsertDto: new model.TabStopInsert({
        alignment: model.TabStopInsert.AlignmentEnum.Left,
        leader: model.TabStopInsert.LeaderEnum.None,
        position: 72
    }),
    index: 0,
    nodePath: ""
});

return wordsApi.insertOrUpdateParagraphTabStopOnline(insertRequest)
.then((insertRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of insertRequest: ", insertRequestResult);
});