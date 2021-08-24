const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
let requestDocument = fs.createReadStream("Sample.docx");
let requestParagraph = new model.ParagraphInsert({
    text: "This is a new paragraph for your document"
})
const insertRequest = new model.InsertParagraphOnlineRequest({
    document: requestDocument,
    paragraph: requestParagraph,
    nodePath: "sections/0"
});

wordsApi.insertParagraphOnline(insertRequest)
.then((insertRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of insertRequest: ", insertRequestResult);
});