const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
let requestStyleUpdate = new model.StyleUpdate({
    name: "My Style"
})
const updateRequest = new model.UpdateStyleRequest({
    name: "Sample.docx",
    styleUpdate: requestStyleUpdate,
    styleName: "Heading 1"
});

wordsApi.updateStyle(updateRequest)
.then((updateRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of updateRequest: ", updateRequestResult);
});