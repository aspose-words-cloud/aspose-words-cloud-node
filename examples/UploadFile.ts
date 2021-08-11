const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const documentsDir = "./";
const uploadRequest = new model.UploadFileRequest({
    fileContent: fs.createReadStream(documentsDir + "Sample.docx"),
    path: "Sample.docx"
});

return wordsApi.uploadFile(uploadRequest)
.then((uploadRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of uploadRequest: ", uploadRequestResult);
});