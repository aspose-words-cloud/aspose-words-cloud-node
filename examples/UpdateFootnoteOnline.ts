const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const documentsDir = "./";
const updateRequest = new model.UpdateFootnoteOnlineRequest({
    document: fs.createReadStream(documentsDir + "/Footnote.doc"),
    index: 0,
    footnoteDto: new model.FootnoteUpdate({
        text: "new text is here"
    }),
    nodePath: ""
});

return wordsApi.updateFootnoteOnline(updateRequest)
.then((updateRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of updateRequest: ", updateRequestResult);
});