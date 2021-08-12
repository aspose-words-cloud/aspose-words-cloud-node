const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const documentsDir = "./";
const updateRequest = new model.UpdateFieldOnlineRequest({
    document: fs.createReadStream(documentsDir + "Sample.docx"),
    index: 0,
    field: new model.FieldUpdate({
        fieldCode: "{ NUMPAGES }"
    }),
    nodePath: "sections/0/paragraphs/0"
});

return wordsApi.updateFieldOnline(updateRequest)
.then((updateRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of updateRequest: ", updateRequestResult);
});