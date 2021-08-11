const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const updateRequest = new model.UpdateRunRequest({
    name: "Sample.docx",
    run: new model.RunUpdate({
        text: "run with text"
    }),
    paragraphPath: "paragraphs/1",
    index: 0
});

return wordsApi.updateRun(updateRequest)
.then((updateRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of updateRequest: ", updateRequestResult);
});