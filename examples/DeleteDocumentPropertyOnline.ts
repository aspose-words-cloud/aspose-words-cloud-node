const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const documentsDir = "./";
const deleteRequest = new model.DeleteDocumentPropertyOnlineRequest({
    document: fs.createReadStream(documentsDir + "Sample.docx"),
    propertyName: "testProp"
});

return wordsApi.deleteDocumentPropertyOnline(deleteRequest)
.then((deleteRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of deleteRequest: ", deleteRequestResult);
});