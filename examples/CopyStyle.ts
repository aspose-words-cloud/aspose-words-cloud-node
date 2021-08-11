const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const copyRequest = new model.CopyStyleRequest({
    name: "Sample.docx",
    styleCopy: new model.StyleCopy({
        styleName: "Heading 1"
    })
});

return wordsApi.copyStyle(copyRequest)
.then((copyRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of copyRequest: ", copyRequestResult);
});