const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const documentsDir = "./";
const insertRequest = new model.InsertParagraphOnlineRequest({
    document: fs.createReadStream(documentsDir + "Sample.docx"),
    paragraph: new model.ParagraphInsert({
        text: "This is a new paragraph for your document"
    }),
    nodePath: "sections/0"
});

return wordsApi.insertParagraphOnline(insertRequest)
.then((insertRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of insertRequest: ", insertRequestResult);
});