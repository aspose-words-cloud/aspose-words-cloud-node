const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const request = new model.GetParagraphListFormatRequest({
    name: "Sample.docx",
    index: 0
});

return wordsApi.getParagraphListFormat(request)
.then((requestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of request: ", requestResult);
});