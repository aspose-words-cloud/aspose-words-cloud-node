const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
let requestField = new model.FieldInsert({
    fieldCode: "{ NUMPAGES }"
})
const insertRequest = new model.InsertFieldRequest({
    name: "Sample.docx",
    field: requestField
});

wordsApi.insertField(insertRequest)
.then((insertRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of insertRequest: ", insertRequestResult);
});