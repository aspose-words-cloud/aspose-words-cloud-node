const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const remoteFileName = "Sample.docx";

const updateRequest = new model.UpdateRunFontRequest({
    name: remoteFileName,
    fontDto: new model.Font({
        bold: true
    }),
    paragraphPath: "paragraphs/0",
    index: 0,
    destFileName: remoteFileName
});

return wordsApi.updateRunFont(updateRequest)
.then((updateRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of updateRequest: ", updateRequestResult);
});