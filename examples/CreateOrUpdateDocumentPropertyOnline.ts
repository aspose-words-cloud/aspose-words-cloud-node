const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const documentsDir = "./";
const createRequest = new model.CreateOrUpdateDocumentPropertyOnlineRequest({
    document: fs.createReadStream(documentsDir + "Sample.docx"),
    propertyName: "AsposeAuthor",
    property: new model.DocumentPropertyCreateOrUpdate({
        value: "Imran Anwar"
    })
});

return wordsApi.createOrUpdateDocumentPropertyOnline(createRequest)
.then((createRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of createRequest: ", createRequestResult);
});