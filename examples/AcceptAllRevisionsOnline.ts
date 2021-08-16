const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const documentsDir = "./";
const fileName  = "test_doc.docx";

// Calls AcceptAllRevisionsOnline method for document in cloud.
let requestDocument = fs.createReadStream(documentsDir + fileName);
const request = new model.AcceptAllRevisionsOnlineRequest({
    document: requestDocument
});

return wordsApi.acceptAllRevisionsOnline(request)
.then((requestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of Request: ", requestResult);
    fs.writeFileSync("test_result.docx", requestResult.body.document);
});