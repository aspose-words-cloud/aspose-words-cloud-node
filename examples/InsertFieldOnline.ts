const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
let requestDocument = fs.createReadStream("Sample.docx");
let requestField = new model.FieldInsert({
    fieldCode: "{ NUMPAGES }"
})
const insertRequest = new model.InsertFieldOnlineRequest({
    document: requestDocument,
    field: requestField,
    nodePath: "sections/0/paragraphs/0"
});

wordsApi.insertFieldOnline(insertRequest)
.then((insertRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of insertRequest: ", insertRequestResult);
});