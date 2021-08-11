const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const documentsDir = "./";
const updateRequest = new model.UpdateRunOnlineRequest({
    document: fs.createReadStream(documentsDir + "DocumentElements/Runs/Run.doc"),
    run: new model.RunUpdate({
        text: "run with text"
    }),
    paragraphPath: "paragraphs/1",
    index: 0
});

return wordsApi.updateRunOnline(updateRequest)
.then((updateRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of updateRequest: ", updateRequestResult);
});