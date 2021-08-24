const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
let requestDocument = fs.createReadStream("Sample.docx");
let requestFontDto = new model.Font({
    bold: true
})
const updateRequest = new model.UpdateRunFontOnlineRequest({
    document: requestDocument,
    fontDto: requestFontDto,
    paragraphPath: "paragraphs/0",
    index: 0
});

wordsApi.updateRunFontOnline(updateRequest)
.then((updateRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of updateRequest: ", updateRequestResult);
});