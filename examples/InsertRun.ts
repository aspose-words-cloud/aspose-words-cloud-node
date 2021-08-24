const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
let requestRun = new model.RunInsert({
    text: "run with text"
})
const insertRequest = new model.InsertRunRequest({
    name: "Sample.docx",
    paragraphPath: "paragraphs/1",
    run: requestRun
});

wordsApi.insertRun(insertRequest)
.then((insertRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of insertRequest: ", insertRequestResult);
});