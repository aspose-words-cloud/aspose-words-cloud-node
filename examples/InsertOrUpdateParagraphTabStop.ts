const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
let requestTabStopInsertDto = new model.TabStopInsert({
    alignment: model.TabStopInsert.AlignmentEnum.Left,
    leader: model.TabStopInsert.LeaderEnum.None,
    position: 100.0
})
const insertRequest = new model.InsertOrUpdateParagraphTabStopRequest({
    name: "Sample.docx",
    index: 0,
    tabStopInsertDto: requestTabStopInsertDto
});

wordsApi.insertOrUpdateParagraphTabStop(insertRequest)
.then((insertRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of insertRequest: ", insertRequestResult);
});