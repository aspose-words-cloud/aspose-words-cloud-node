const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const documentsDir = "./";
const request = new model.GetFormFieldOnlineRequest({
    document: fs.createReadStream(documentsDir + "Sample.docx"),
    index: 0,
    nodePath: "sections/0"
});

return wordsApi.getFormFieldOnline(request)
.then((requestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of request: ", requestResult);
});