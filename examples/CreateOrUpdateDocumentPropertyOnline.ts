const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
let requestDocument = fs.createReadStream("Sample.docx");
let requestProperty = new model.DocumentPropertyCreateOrUpdate({
    value: "Imran Anwar"
})
const createRequest = new model.CreateOrUpdateDocumentPropertyOnlineRequest({
    document: requestDocument,
    propertyName: "AsposeAuthor",
    property: requestProperty
});

wordsApi.createOrUpdateDocumentPropertyOnline(createRequest)
.then((createRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of createRequest: ", createRequestResult);
});