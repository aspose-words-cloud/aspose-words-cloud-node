const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const documentsDir = "./";
const request = new model.GetDocumentPropertyOnlineRequest({
    document: fs.createReadStream(documentsDir + "Sample.docx"),
    propertyName: "Author"
});

return wordsApi.getDocumentPropertyOnline(request)
.then((requestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of request: ", requestResult);
});