const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const insertRequest = new model.InsertParagraphRequest({
    name: "Sample.docx",
    paragraph: new model.ParagraphInsert({
        text: "This is a new paragraph for your document"
    })
});

return wordsApi.insertParagraph(insertRequest)
.then((insertRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of insertRequest: ", insertRequestResult);
});