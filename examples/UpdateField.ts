const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
let requestField = new model.FieldUpdate({
    fieldCode: "{ NUMPAGES }"
})
const updateRequest = new model.UpdateFieldRequest({
    name: "Sample.docx",
    index: 0,
    field: requestField,
    nodePath: "sections/0/paragraphs/0"
});

wordsApi.updateField(updateRequest)
.then((updateRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of updateRequest: ", updateRequestResult);
});