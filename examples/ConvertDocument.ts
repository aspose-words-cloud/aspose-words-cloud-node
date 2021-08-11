const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const documentsDir = "./";
const convertRequest = new model.ConvertDocumentRequest({
    document: fs.createReadStream(documentsDir + "/test_uploadfile.docx"),
    format: "pdf"
});

return wordsApi.convertDocument(convertRequest)
.then((convertRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of convertRequest: ", convertRequestResult);
});