const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const insertRequest = new model.InsertRunRequest({
    name: "Sample.docx",
    paragraphPath: "paragraphs/1",
    run: new model.RunInsert({
        text: "run with text"
    })
});

return wordsApi.insertRun(insertRequest)
.then((insertRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of insertRequest: ", insertRequestResult);
});