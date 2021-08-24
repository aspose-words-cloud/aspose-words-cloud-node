const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
let requestFootnoteDto = new model.FootnoteUpdate({
    text: "new text is here"
})
const updateRequest = new model.UpdateFootnoteRequest({
    name: "Sample.docx",
    index: 0,
    footnoteDto: requestFootnoteDto
});

wordsApi.updateFootnote(updateRequest)
.then((updateRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of updateRequest: ", updateRequestResult);
});