const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
let requestStyleInsert = new model.StyleInsert({
    styleName: "My Style",
    styleType: model.StyleInsert.StyleTypeEnum.Paragraph
})
const insertRequest = new model.InsertStyleRequest({
    name: "Sample.docx",
    styleInsert: requestStyleInsert
});

wordsApi.insertStyle(insertRequest)
.then((insertRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of insertRequest: ", insertRequestResult);
});