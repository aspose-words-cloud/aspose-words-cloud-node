const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const moveRequest = new model.MoveFileRequest({
    destPath: "/TestMoveFileDest_Sample.docx",
    srcPath: "Sample.docx"
});

wordsApi.moveFile(moveRequest)
.then((moveRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of moveRequest: ", moveRequestResult);
});