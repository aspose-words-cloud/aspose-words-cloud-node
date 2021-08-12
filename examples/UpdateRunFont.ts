const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const updateRequest = new model.UpdateRunFontRequest({
    name: "Sample.docx",
    fontDto: new model.Font({
        bold: true
    }),
    paragraphPath: "paragraphs/0",
    index: 0
});

return wordsApi.updateRunFont(updateRequest)
.then((updateRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of updateRequest: ", updateRequestResult);
});