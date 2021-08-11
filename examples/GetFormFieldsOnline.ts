const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const documentsDir = "./";
const request = new model.GetFormFieldsOnlineRequest({
    document: fs.createReadStream(documentsDir + "/FormFilled.docx"),
    nodePath: "sections/0"
});

return wordsApi.getFormFieldsOnline(request)
.then((requestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of request: ", requestResult);
});