const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const classifyRequest = new model.ClassifyDocumentRequest({
    name: "Sample.docx",
    bestClassesCount: "3"
});

return wordsApi.classifyDocument(classifyRequest)
.then((classifyRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of classifyRequest: ", classifyRequestResult);
});