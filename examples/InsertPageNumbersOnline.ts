const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
let requestDocument = fs.createReadStream("Common/Sample.docx");
let requestPageNumber = new model.PageNumber({
    alignment: "center",
    format: "{PAGE} of {NUMPAGES}"
})
const insertRequest = new model.InsertPageNumbersOnlineRequest({
    document: requestDocument,
    pageNumber: requestPageNumber
});

wordsApi.insertPageNumbersOnline(insertRequest)
.then((insertRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of insertRequest: ", insertRequestResult);
});