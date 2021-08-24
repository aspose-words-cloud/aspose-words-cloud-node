const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
let requestStyleApply = new model.StyleApply({
    styleName: "Heading 1"
})
const applyStyleRequest = new model.ApplyStyleToDocumentElementRequest({
    name: "Sample.docx",
    styleApply: requestStyleApply,
    styledNodePath: "paragraphs/1/paragraphFormat"
});

wordsApi.applyStyleToDocumentElement(applyStyleRequest)
.then((applyStyleRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of applyStyleRequest: ", applyStyleRequestResult);
});