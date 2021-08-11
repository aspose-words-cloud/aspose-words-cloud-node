const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const documentsDir = "./";
const request = new model.GetOfficeMathObjectsOnlineRequest({
    document: fs.createReadStream(documentsDir + "Sample.docx"),
    nodePath: ""
});

return wordsApi.getOfficeMathObjectsOnline(request)
.then((requestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of request: ", requestResult);
});