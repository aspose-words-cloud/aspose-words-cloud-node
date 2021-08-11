const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const documentsDir = "./";
const insertRequest = new model.InsertHeaderFooterOnlineRequest({
    document: fs.createReadStream(documentsDir + "DocumentElements/HeaderFooters/HeadersFooters.doc"),
    sectionPath: "",
    headerFooterType: "FooterEven"
});

return wordsApi.insertHeaderFooterOnline(insertRequest)
.then((insertRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of insertRequest: ", insertRequestResult);
});