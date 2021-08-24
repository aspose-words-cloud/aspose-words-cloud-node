const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
let requestDocument = fs.createReadStream("Sample.docx");
const classifyRequest = new model.ClassifyDocumentOnlineRequest({
    document: requestDocument,
    bestClassesCount: "3"
});

wordsApi.classifyDocumentOnline(classifyRequest)
.then((classifyRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of classifyRequest: ", classifyRequestResult);
});