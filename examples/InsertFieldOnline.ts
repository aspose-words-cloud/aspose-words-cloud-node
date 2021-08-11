const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const documentsDir = "./";
const insertRequest = new model.InsertFieldOnlineRequest({
    document: fs.createReadStream(documentsDir + "/GetField.docx"),
    field: new model.FieldInsert({
        fieldCode: "{ NUMPAGES }"
    }),
    nodePath: "sections/0/paragraphs/0"
});

return wordsApi.insertFieldOnline(insertRequest)
.then((insertRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of insertRequest: ", insertRequestResult);
});