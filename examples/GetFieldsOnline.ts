const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const documentsDir = "./";
const request = new model.GetFieldsOnlineRequest({
    document: fs.createReadStream(documentsDir + "/GetField.docx"),
    nodePath: "sections/0"
});

return wordsApi.getFieldsOnline(request)
.then((requestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of request: ", requestResult);
});