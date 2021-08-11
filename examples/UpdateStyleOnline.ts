const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const documentsDir = "./";
const updateRequest = new model.UpdateStyleOnlineRequest({
    document: fs.createReadStream(documentsDir + "Sample.docx"),
    styleUpdate: new model.StyleUpdate({
        name: "My Style"
    }),
    styleName: "Heading 1"
});

return wordsApi.updateStyleOnline(updateRequest)
.then((updateRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of updateRequest: ", updateRequestResult);
});