const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const request = new model.GetCustomXmlPartRequest({
    name: "Sample.docx",
    customXmlPartIndex: 0
});

return wordsApi.getCustomXmlPart(request)
.then((requestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of request: ", requestResult);
});