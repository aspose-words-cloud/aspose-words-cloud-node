const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const deleteRequest = new model.DeleteCustomXmlPartRequest({
    name: "Sample.docx",
    customXmlPartIndex: 0
});

return wordsApi.deleteCustomXmlPart(deleteRequest)
.then((deleteRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of deleteRequest: ", deleteRequestResult);
});