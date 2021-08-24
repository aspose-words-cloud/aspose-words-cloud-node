const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
let requestRun = new model.RunUpdate({
    text: "run with text"
})
const updateRequest = new model.UpdateRunRequest({
    name: "Sample.docx",
    run: requestRun,
    paragraphPath: "paragraphs/1",
    index: 0
});

wordsApi.updateRun(updateRequest)
.then((updateRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of updateRequest: ", updateRequestResult);
});