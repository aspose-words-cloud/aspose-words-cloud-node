const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const documentsDir = "./";
const request = new model.GetRunsOnlineRequest({
    document: fs.createReadStream(documentsDir + "Sample.docx"),
    paragraphPath: "sections/0/paragraphs/0"
});

return wordsApi.getRunsOnline(request)
.then((requestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of request: ", requestResult);
});