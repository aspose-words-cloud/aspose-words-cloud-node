const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
let requestProperty = new model.DocumentPropertyCreateOrUpdate({
    value: "Imran Anwar"
})
const createRequest = new model.CreateOrUpdateDocumentPropertyRequest({
    name: "Sample.docx",
    propertyName: "AsposeAuthor",
    property: requestProperty
});

wordsApi.createOrUpdateDocumentProperty(createRequest)
.then((createRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of createRequest: ", createRequestResult);
});