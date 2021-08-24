const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
let requestDocument = fs.createReadStream("Sample.doc");
let requestRun = new model.RunUpdate({
    text: "run with text"
})
const updateRequest = new model.UpdateRunOnlineRequest({
    document: requestDocument,
    run: requestRun,
    paragraphPath: "paragraphs/1",
    index: 0
});

wordsApi.updateRunOnline(updateRequest)
.then((updateRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of updateRequest: ", updateRequestResult);
});