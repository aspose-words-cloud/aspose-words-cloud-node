const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const request = new model.GetSectionPageSetupRequest({
    name: "Sample.docx",
    sectionIndex: 0
});

return wordsApi.getSectionPageSetup(request)
.then((requestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of request: ", requestResult);
});