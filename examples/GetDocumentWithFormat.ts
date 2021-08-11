const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const request = new model.GetDocumentWithFormatRequest({
    name: "Sample.docx",
    format: "text",
    outPath: "/TestGetDocumentWithFormatAndOutPath.text"
});

return wordsApi.getDocumentWithFormat(request)
.then((requestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of request: ", requestResult);
});