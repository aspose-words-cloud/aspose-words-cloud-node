const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const createRequest = new model.CreateDocumentRequest({
    fileName: "Sample.docx"
});

wordsApi.createDocument(createRequest)
.then((createRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of createRequest: ", createRequestResult);
});