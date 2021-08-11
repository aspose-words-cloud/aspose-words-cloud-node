const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const documentsDir = "./";
const request = new model.GetDocumentFieldNamesOnlineRequest({
    template: fs.createReadStream(documentsDir + "Sample.docx"),
    useNonMergeFields: true
});

return wordsApi.getDocumentFieldNamesOnline(request)
.then((requestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of request: ", requestResult);
});