const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const documentsDir = "./";
const request = new model.GetSectionPageSetupOnlineRequest({
    document: fs.createReadStream(documentsDir + "Sample.docx"),
    sectionIndex: 0
});

return wordsApi.getSectionPageSetupOnline(request)
.then((requestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of request: ", requestResult);
});