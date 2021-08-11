const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const remoteFileName = "Sample.docx";

const createRequest = new model.CreateOrUpdateDocumentPropertyRequest({
    name: remoteFileName,
    propertyName: "AsposeAuthor",
    property: new model.DocumentPropertyCreateOrUpdate({
        value: "Imran Anwar"
    }),
    destFileName: remoteFileName
});

return wordsApi.createOrUpdateDocumentProperty(createRequest)
.then((createRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of createRequest: ", createRequestResult);
});