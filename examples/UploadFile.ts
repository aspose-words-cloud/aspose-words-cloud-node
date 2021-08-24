const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
let requestFileContent = fs.createReadStream("Sample.docx");
const uploadRequest = new model.UploadFileRequest({
    fileContent: requestFileContent,
    path: "Sample.docx"
});

wordsApi.uploadFile(uploadRequest)
.then((uploadRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of uploadRequest: ", uploadRequestResult);
});