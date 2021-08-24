const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const request = new model.GetSectionRequest({
    name: "Sample.docx",
    sectionIndex: 0
});

wordsApi.getSection(request)
.then((requestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of request: ", requestResult);
});