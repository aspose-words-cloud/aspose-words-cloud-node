const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
let requestDocument = fs.createReadStream("Sample.docx");
const deleteRequest = new model.DeleteFormFieldOnlineRequest({
    document: requestDocument,
    index: 0,
    nodePath: "sections/0"
});

wordsApi.deleteFormFieldOnline(deleteRequest)
.then((deleteRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of deleteRequest: ", deleteRequestResult);
});