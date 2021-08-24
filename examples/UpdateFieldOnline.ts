const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
let requestDocument = fs.createReadStream("Sample.docx");
let requestField = new model.FieldUpdate({
    fieldCode: "{ NUMPAGES }"
})
const updateRequest = new model.UpdateFieldOnlineRequest({
    document: requestDocument,
    index: 0,
    field: requestField,
    nodePath: "sections/0/paragraphs/0"
});

wordsApi.updateFieldOnline(updateRequest)
.then((updateRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of updateRequest: ", updateRequestResult);
});