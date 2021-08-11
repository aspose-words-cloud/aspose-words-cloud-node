const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const documentsDir = "./";
const insertRequest = new model.InsertFootnoteOnlineRequest({
    document: fs.createReadStream(documentsDir + "/Footnote.doc"),
    footnoteDto: new model.FootnoteInsert({
        footnoteType: model.FootnoteInsert.FootnoteTypeEnum.Endnote,
        text: "test endnote"
    }),
    nodePath: ""
});

return wordsApi.insertFootnoteOnline(insertRequest)
.then((insertRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of insertRequest: ", insertRequestResult);
});