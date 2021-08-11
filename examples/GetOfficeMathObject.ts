const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const request = new model.GetOfficeMathObjectRequest({
    name: "Sample.docx",
    index: 0
});

return wordsApi.getOfficeMathObject(request)
.then((requestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of request: ", requestResult);
});