const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const request = new model.GetHeaderFooterOfSectionRequest({
    name: "Sample.docx",
    headerFooterIndex: 0,
    sectionIndex: 0
});

return wordsApi.getHeaderFooterOfSection(request)
.then((requestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of request: ", requestResult);
});