const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
let requestDocument = fs.createReadStream("Sample.docx");
let requestTabStopInsertDto = new model.TabStopInsert({
    alignment: model.TabStopInsert.AlignmentEnum.Left,
    leader: model.TabStopInsert.LeaderEnum.None,
    position: 72
})
const insertRequest = new model.InsertOrUpdateParagraphTabStopOnlineRequest({
    document: requestDocument,
    tabStopInsertDto: requestTabStopInsertDto,
    index: 0
});

wordsApi.insertOrUpdateParagraphTabStopOnline(insertRequest)
.then((insertRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of insertRequest: ", insertRequestResult);
});