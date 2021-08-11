const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const documentsDir = "./";
const insertRequest = new model.InsertStyleOnlineRequest({
    document: fs.createReadStream(documentsDir + "Sample.docx"),
    styleInsert: new model.StyleInsert({
        styleName: "My Style",
        styleType: model.StyleInsert.StyleTypeEnum.Paragraph
    })
});

return wordsApi.insertStyleOnline(insertRequest)
.then((insertRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of insertRequest: ", insertRequestResult);
});