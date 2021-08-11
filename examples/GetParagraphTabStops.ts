const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const request = new model.GetParagraphTabStopsRequest({
    name: "Sample.docx",
    index: 0
});

return wordsApi.getParagraphTabStops(request)
.then((requestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of request: ", requestResult);
});