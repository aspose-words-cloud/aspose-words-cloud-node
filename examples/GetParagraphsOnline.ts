const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const documentsDir = "./";
const request = new model.GetParagraphsOnlineRequest({
    document: fs.createReadStream(documentsDir + "Sample.docx"),
    nodePath: "sections/0"
});

return wordsApi.getParagraphsOnline(request)
.then((requestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of request: ", requestResult);
});