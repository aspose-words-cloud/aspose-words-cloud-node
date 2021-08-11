const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const documentsDir = "./";
const request = new model.GetStyleOnlineRequest({
    document: fs.createReadStream(documentsDir + "Sample.docx"),
    styleName: "Heading 1"
});

return wordsApi.getStyleOnline(request)
.then((requestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of request: ", requestResult);
});