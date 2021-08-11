const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const documentsDir = "./";
const updateRequest = new model.UpdateRunFontOnlineRequest({
    document: fs.createReadStream(documentsDir + "Sample.docx"),
    fontDto: new model.Font({
        bold: true
    }),
    paragraphPath: "paragraphs/0",
    index: 0
});

return wordsApi.updateRunFontOnline(updateRequest)
.then((updateRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of updateRequest: ", updateRequestResult);
});