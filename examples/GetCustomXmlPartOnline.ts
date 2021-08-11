const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const documentsDir = "./";
const request = new model.GetCustomXmlPartOnlineRequest({
    document: fs.createReadStream(documentsDir + "Sample.docx"),
    customXmlPartIndex: 0
});

return wordsApi.getCustomXmlPartOnline(request)
.then((requestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of request: ", requestResult);
});