const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const createRequest = new model.CreateOrUpdateDocumentPropertyRequest({
    name: "Sample.docx",
    propertyName: "AsposeAuthor",
    property: new model.DocumentPropertyCreateOrUpdate({
        value: "Imran Anwar"
    })
});

return wordsApi.createOrUpdateDocumentProperty(createRequest)
.then((createRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of createRequest: ", createRequestResult);
});