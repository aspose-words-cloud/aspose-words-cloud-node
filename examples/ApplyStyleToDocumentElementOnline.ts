const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
let requestDocument = fs.createReadStream("Sample.docx");
let requestStyleApply = new model.StyleApply({
    styleName: "Heading 1"
})
const applyStyleRequest = new model.ApplyStyleToDocumentElementOnlineRequest({
    document: requestDocument,
    styleApply: requestStyleApply,
    styledNodePath: "paragraphs/1/paragraphFormat"
});

wordsApi.applyStyleToDocumentElementOnline(applyStyleRequest)
.then((applyStyleRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of applyStyleRequest: ", applyStyleRequestResult);
});