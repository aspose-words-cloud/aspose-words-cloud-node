const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const documentsDir = "./";
const deleteRequest = new model.DeleteRunOnlineRequest({
    document: fs.createReadStream(documentsDir + "Sample.doc"),
    paragraphPath: "paragraphs/1",
    index: 0
});

return wordsApi.deleteRunOnline(deleteRequest)
.then((deleteRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of deleteRequest: ", deleteRequestResult);
});