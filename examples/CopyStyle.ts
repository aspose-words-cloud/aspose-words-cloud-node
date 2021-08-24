const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
let requestStyleCopy = new model.StyleCopy({
    styleName: "Heading 1"
})
const copyRequest = new model.CopyStyleRequest({
    name: "Sample.docx",
    styleCopy: requestStyleCopy
});

wordsApi.copyStyle(copyRequest)
.then((copyRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of copyRequest: ", copyRequestResult);
});