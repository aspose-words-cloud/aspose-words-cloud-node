const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const documentsDir = "./";
const splitRequest = new model.SplitDocumentOnlineRequest({
    document: fs.createReadStream(documentsDir + "Sample.docx"),
    format: "text",
    destFileName: "/TestSplitDocument.text",
    from: 1,
    to: 2
});

return wordsApi.splitDocumentOnline(splitRequest)
.then((splitRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of splitRequest: ", splitRequestResult);
});