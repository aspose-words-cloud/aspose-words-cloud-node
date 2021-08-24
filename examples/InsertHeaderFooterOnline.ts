const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
let requestDocument = fs.createReadStream("Sample.doc");
const insertRequest = new model.InsertHeaderFooterOnlineRequest({
    document: requestDocument,
    sectionPath: "",
    headerFooterType: "FooterEven"
});

wordsApi.insertHeaderFooterOnline(insertRequest)
.then((insertRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of insertRequest: ", insertRequestResult);
});