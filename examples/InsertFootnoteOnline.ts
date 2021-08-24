const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
let requestDocument = fs.createReadStream("Sample.doc");
let requestFootnoteDto = new model.FootnoteInsert({
    footnoteType: model.FootnoteInsert.FootnoteTypeEnum.Endnote,
    text: "test endnote"
})
const insertRequest = new model.InsertFootnoteOnlineRequest({
    document: requestDocument,
    footnoteDto: requestFootnoteDto
});

wordsApi.insertFootnoteOnline(insertRequest)
.then((insertRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of insertRequest: ", insertRequestResult);
});