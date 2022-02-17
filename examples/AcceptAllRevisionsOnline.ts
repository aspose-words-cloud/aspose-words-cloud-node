const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const fileName = "test_doc.docx";

// Calls AcceptAllRevisionsOnline method for document in cloud.
const requestDocument = fs.createReadStream(fileName);
const request = new model.AcceptAllRevisionsOnlineRequest({
    document: requestDocument
});

wordsApi.acceptAllRevisionsOnline(request)
.then((requestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of Request: ", requestResult);
    fs.writeFileSync("test_result.docx", requestResult.body.document.entries().next().value);
});