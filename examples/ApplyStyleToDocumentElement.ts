const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const applyStyleRequest = new model.ApplyStyleToDocumentElementRequest({
    name: "Sample.docx",
    styleApply: new model.StyleApply({
        styleName: "Heading 1"
    }),
    styledNodePath: "paragraphs/1/paragraphFormat"
});

return wordsApi.applyStyleToDocumentElement(applyStyleRequest)
.then((applyStyleRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of applyStyleRequest: ", applyStyleRequestResult);
});