const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
let requestDocument = fs.createReadStream("Sample.doc");
let requestRun = new model.RunInsert({
    text: "run with text"
})
const insertRequest = new model.InsertRunOnlineRequest({
    document: requestDocument,
    paragraphPath: "paragraphs/1",
    run: requestRun
});

wordsApi.insertRunOnline(insertRequest)
.then((insertRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of insertRequest: ", insertRequestResult);
});