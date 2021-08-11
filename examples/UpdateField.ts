const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const updateRequest = new model.UpdateFieldRequest({
    name: "Sample.docx",
    index: 0,
    field: new model.FieldUpdate({
        fieldCode: "{ NUMPAGES }"
    }),
    nodePath: "sections/0/paragraphs/0"
});

return wordsApi.updateField(updateRequest)
.then((updateRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of updateRequest: ", updateRequestResult);
});