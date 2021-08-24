const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const copyRequest = new model.CopyFileRequest({
    destPath: "/TestCopyFileDest.docx",
    srcPath: "Sample.docx"
});

wordsApi.copyFile(copyRequest)
.then((copyRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of copyRequest: ", copyRequestResult);
});