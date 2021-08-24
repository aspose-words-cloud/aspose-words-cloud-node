const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
let requestPageNumber = new model.PageNumber({
    alignment: "center",
    format: "{PAGE} of {NUMPAGES}"
})
const insertRequest = new model.InsertPageNumbersRequest({
    name: "Sample.docx",
    pageNumber: requestPageNumber
});

wordsApi.insertPageNumbers(insertRequest)
.then((insertRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of insertRequest: ", insertRequestResult);
});