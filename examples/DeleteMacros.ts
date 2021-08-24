const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const deleteRequest = new model.DeleteMacrosRequest({
    name: "Sample.docx"
});

wordsApi.deleteMacros(deleteRequest)
.then((deleteRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of deleteRequest: ", deleteRequestResult);
});