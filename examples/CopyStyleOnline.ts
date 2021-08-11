const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const documentsDir = "./";
const copyRequest = new model.CopyStyleOnlineRequest({
    document: fs.createReadStream(documentsDir + "Sample.docx"),
    styleCopy: new model.StyleCopy({
        styleName: "Heading 1"
    })
});

return wordsApi.copyStyleOnline(copyRequest)
.then((copyRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of copyRequest: ", copyRequestResult);
});