const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const folderToCopy = "/TestCopyFolder";

const copyRequest = new model.CopyFolderRequest({
    destPath: folderToCopy + "Dest",
    srcPath: folderToCopy + "Src"
});

wordsApi.copyFolder(copyRequest)
.then((copyRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of copyRequest: ", copyRequestResult);
});