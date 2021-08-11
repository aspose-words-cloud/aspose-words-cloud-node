const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const insertRequest = new model.InsertHeaderFooterRequest({
    name: "Sample.docx",
    sectionPath: "",
    headerFooterType: "FooterEven"
});

return wordsApi.insertHeaderFooter(insertRequest)
.then((insertRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of insertRequest: ", insertRequestResult);
});