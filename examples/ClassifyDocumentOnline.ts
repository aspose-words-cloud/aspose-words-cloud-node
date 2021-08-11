const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const documentsDir = "./";
const classifyRequest = new model.ClassifyDocumentOnlineRequest({
    document: fs.createReadStream(documentsDir + "Sample.docx"),
    bestClassesCount: "3"
});

return wordsApi.classifyDocumentOnline(classifyRequest)
.then((classifyRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of classifyRequest: ", classifyRequestResult);
});