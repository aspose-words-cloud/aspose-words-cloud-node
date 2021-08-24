const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
let requestDocument = fs.createReadStream("Sample.doc");
let requestFootnoteDto = new model.FootnoteUpdate({
    text: "new text is here"
})
const updateRequest = new model.UpdateFootnoteOnlineRequest({
    document: requestDocument,
    index: 0,
    footnoteDto: requestFootnoteDto
});

wordsApi.updateFootnoteOnline(updateRequest)
.then((updateRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of updateRequest: ", updateRequestResult);
});