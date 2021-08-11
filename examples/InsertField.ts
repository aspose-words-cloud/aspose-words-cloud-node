const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const insertRequest = new model.InsertFieldRequest({
    name: "Sample.docx",
    field: new model.FieldInsert({
        fieldCode: "{ NUMPAGES }"
    })
});

return wordsApi.insertField(insertRequest)
.then((insertRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of insertRequest: ", insertRequestResult);
});