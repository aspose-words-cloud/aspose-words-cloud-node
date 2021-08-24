const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
let requestDocument = fs.createReadStream("Sample.docx");
let requestStyleCopy = new model.StyleCopy({
    styleName: "Heading 1"
})
const copyRequest = new model.CopyStyleOnlineRequest({
    document: requestDocument,
    styleCopy: requestStyleCopy
});

wordsApi.copyStyleOnline(copyRequest)
.then((copyRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of copyRequest: ", copyRequestResult);
});