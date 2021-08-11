const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const moveRequest = new model.MoveFolderRequest({
    destPath: "/TestMoveFolderDest_Sample",
    srcPath: "/TestMoveFolderSrc"
});

return wordsApi.moveFolder(moveRequest)
.then((moveRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of moveRequest: ", moveRequestResult);
});