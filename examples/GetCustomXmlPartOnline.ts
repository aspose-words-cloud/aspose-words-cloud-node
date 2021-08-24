const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
let requestDocument = fs.createReadStream("Sample.docx");
const request = new model.GetCustomXmlPartOnlineRequest({
    document: requestDocument,
    customXmlPartIndex: 0
});

wordsApi.getCustomXmlPartOnline(request)
.then((requestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of request: ", requestResult);
});