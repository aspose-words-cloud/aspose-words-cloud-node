const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const downloadRequest = new model.DownloadFileRequest({
    path: "Sample.docx"
});

wordsApi.downloadFile(downloadRequest)
.then((downloadRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of downloadRequest: ", downloadRequestResult);
});