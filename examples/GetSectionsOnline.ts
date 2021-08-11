const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const documentsDir = "./";
const request = new model.GetSectionsOnlineRequest({
    document: fs.createReadStream(documentsDir + "Sample.docx")
});

return wordsApi.getSectionsOnline(request)
.then((requestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of request: ", requestResult);
});