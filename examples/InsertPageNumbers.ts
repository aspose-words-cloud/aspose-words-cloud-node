const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const insertRequest = new model.InsertPageNumbersRequest({
    name: "Sample.docx",
    pageNumber: new model.PageNumber({
        alignment: "center",
        format: "{PAGE} of {NUMPAGES}"
    })
});

return wordsApi.insertPageNumbers(insertRequest)
.then((insertRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of insertRequest: ", insertRequestResult);
});