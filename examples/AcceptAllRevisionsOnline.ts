const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const documentsDir = "./";
const fileName  = "test_doc.docx";

// Calls AcceptAllRevisionsOnline method for document in cloud.
const request = new model.AcceptAllRevisionsOnlineRequest({
    document: fs.createReadStream(documentsDir + fileName)
});

return wordsApi.acceptAllRevisionsOnline(request)
.then((requestResult) => {
    console.log("Result of Request: ", requestResult);
    fs.writeFileSync("test_result.docx", requestResult.body.document);
});