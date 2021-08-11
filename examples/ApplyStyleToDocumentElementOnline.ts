const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const documentsDir = "./";
const applyStyleRequest = new model.ApplyStyleToDocumentElementOnlineRequest({
    document: fs.createReadStream(documentsDir + "Sample.docx"),
    styleApply: new model.StyleApply({
        styleName: "Heading 1"
    }),
    styledNodePath: "paragraphs/1/paragraphFormat"
});

return wordsApi.applyStyleToDocumentElementOnline(applyStyleRequest)
.then((applyStyleRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of applyStyleRequest: ", applyStyleRequestResult);
});