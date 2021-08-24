const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
let requestFontDto = new model.Font({
    bold: true
})
const updateRequest = new model.UpdateRunFontRequest({
    name: "Sample.docx",
    fontDto: requestFontDto,
    paragraphPath: "paragraphs/0",
    index: 0
});

wordsApi.updateRunFont(updateRequest)
.then((updateRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of updateRequest: ", updateRequestResult);
});