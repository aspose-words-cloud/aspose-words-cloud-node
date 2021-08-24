const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
let requestDocument = fs.createReadStream("Sample.docx");
const convertRequest = new model.ConvertDocumentRequest({
    document: requestDocument,
    format: "pdf"
});

wordsApi.convertDocument(convertRequest)
.then((convertRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of convertRequest: ", convertRequestResult);
});