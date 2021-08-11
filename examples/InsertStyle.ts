const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const insertRequest = new model.InsertStyleRequest({
    name: "Sample.docx",
    styleInsert: new model.StyleInsert({
        styleName: "My Style",
        styleType: model.StyleInsert.StyleTypeEnum.Paragraph
    })
});

return wordsApi.insertStyle(insertRequest)
.then((insertRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of insertRequest: ", insertRequestResult);
});