const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const updateRequest = new model.UpdateFootnoteRequest({
    name: "Sample.docx",
    index: 0,
    footnoteDto: new model.FootnoteUpdate({
        text: "new text is here"
    })
});

return wordsApi.updateFootnote(updateRequest)
.then((updateRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of updateRequest: ", updateRequestResult);
});