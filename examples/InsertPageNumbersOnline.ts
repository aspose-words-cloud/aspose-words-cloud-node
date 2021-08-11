const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const documentsDir = "./";
const insertRequest = new model.InsertPageNumbersOnlineRequest({
    document: fs.createReadStream(documentsDir + "Common/Sample.docx"),
    pageNumber: new model.PageNumber({
        alignment: "center",
        format: "{PAGE} of {NUMPAGES}"
    })
});

return wordsApi.insertPageNumbersOnline(insertRequest)
.then((insertRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of insertRequest: ", insertRequestResult);
});