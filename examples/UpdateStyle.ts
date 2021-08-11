const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const updateRequest = new model.UpdateStyleRequest({
    name: "Sample.docx",
    styleUpdate: new model.StyleUpdate({
        name: "My Style"
    }),
    styleName: "Heading 1"
});

return wordsApi.updateStyle(updateRequest)
.then((updateRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of updateRequest: ", updateRequestResult);
});