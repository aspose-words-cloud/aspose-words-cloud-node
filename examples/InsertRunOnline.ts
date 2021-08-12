const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const documentsDir = "./";
const insertRequest = new model.InsertRunOnlineRequest({
    document: fs.createReadStream(documentsDir + "Sample.doc"),
    paragraphPath: "paragraphs/1",
    run: new model.RunInsert({
        text: "run with text"
    })
});

return wordsApi.insertRunOnline(insertRequest)
.then((insertRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of insertRequest: ", insertRequestResult);
});