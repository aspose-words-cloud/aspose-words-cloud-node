const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const remoteFileName = "Sample.docx";

const insertRequest = new model.InsertPageNumbersRequest({
    name: remoteFileName,
    pageNumber: new model.PageNumber({
        alignment: "center",
        format: "{PAGE} of {NUMPAGES}"
    }),
    destFileName: remoteFileName
});

return wordsApi.insertPageNumbers(insertRequest)
.then((insertRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of insertRequest: ", insertRequestResult);
});