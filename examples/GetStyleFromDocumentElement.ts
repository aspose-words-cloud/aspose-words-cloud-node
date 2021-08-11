const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const request = new model.GetStyleFromDocumentElementRequest({
    name: "Sample.docx",
    styledNodePath: "paragraphs/1/paragraphFormat"
});

return wordsApi.getStyleFromDocumentElement(request)
.then((requestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of request: ", requestResult);
});