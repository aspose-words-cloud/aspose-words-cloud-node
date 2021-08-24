const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
let requestDocument = fs.createReadStream("Sample.docx");
let requestStyleInsert = new model.StyleInsert({
    styleName: "My Style",
    styleType: model.StyleInsert.StyleTypeEnum.Paragraph
})
const insertRequest = new model.InsertStyleOnlineRequest({
    document: requestDocument,
    styleInsert: requestStyleInsert
});

wordsApi.insertStyleOnline(insertRequest)
.then((insertRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of insertRequest: ", insertRequestResult);
});