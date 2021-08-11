const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const request = new model.GetParagraphFormatRequest({
    name: "Sample.docx",
    index: 0
});

return wordsApi.getParagraphFormat(request)
.then((requestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of request: ", requestResult);
});