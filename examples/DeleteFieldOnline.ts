const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const documentsDir = "./";
const deleteRequest = new model.DeleteFieldOnlineRequest({
    document: fs.createReadStream(documentsDir + "Sample.docx"),
    index: 0,
    nodePath: "sections/0/paragraphs/0"
});

return wordsApi.deleteFieldOnline(deleteRequest)
.then((deleteRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of deleteRequest: ", deleteRequestResult);
});