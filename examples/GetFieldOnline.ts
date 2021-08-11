const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const documentsDir = "./";
const request = new model.GetFieldOnlineRequest({
    document: fs.createReadStream(documentsDir + "/GetField.docx"),
    index: 0,
    nodePath: "sections/0/paragraphs/0"
});

return wordsApi.getFieldOnline(request)
.then((requestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of request: ", requestResult);
});