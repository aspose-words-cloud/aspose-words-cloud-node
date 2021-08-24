const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
let requestFootnoteDto = new model.FootnoteInsert({
    footnoteType: model.FootnoteInsert.FootnoteTypeEnum.Endnote,
    text: "test endnote"
})
const insertRequest = new model.InsertFootnoteRequest({
    name: "Sample.docx",
    footnoteDto: requestFootnoteDto
});

wordsApi.insertFootnote(insertRequest)
.then((insertRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of insertRequest: ", insertRequestResult);
});