const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const documentsDir = "./";
const request = new model.GetStyleFromDocumentElementOnlineRequest({
    document: fs.createReadStream(documentsDir + "Sample.docx"),
    styledNodePath: "paragraphs/1/paragraphFormat"
});

return wordsApi.getStyleFromDocumentElementOnline(request)
.then((requestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of request: ", requestResult);
});