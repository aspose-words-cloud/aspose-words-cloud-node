const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
let requestDocument = fs.createReadStream("Sample.docx");
let requestStyleUpdate = new model.StyleUpdate({
    name: "My Style"
})
const updateRequest = new model.UpdateStyleOnlineRequest({
    document: requestDocument,
    styleUpdate: requestStyleUpdate,
    styleName: "Heading 1"
});

wordsApi.updateStyleOnline(updateRequest)
.then((updateRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of updateRequest: ", updateRequestResult);
});