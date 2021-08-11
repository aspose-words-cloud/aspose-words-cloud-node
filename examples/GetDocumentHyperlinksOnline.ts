const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const documentsDir = "./";
const request = new model.GetDocumentHyperlinksOnlineRequest({
    document: fs.createReadStream(documentsDir + "Sample.docx")
});

return wordsApi.getDocumentHyperlinksOnline(request)
.then((requestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of request: ", requestResult);
});