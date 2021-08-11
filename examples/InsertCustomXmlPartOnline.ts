const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const documentsDir = "./";
const insertRequest = new model.InsertCustomXmlPartOnlineRequest({
    document: fs.createReadStream(documentsDir + "Sample.docx"),
    customXmlPart: new model.CustomXmlPartInsert({
        id: "hello",
        data: "<data>Hello world</data>"
    })
});

return wordsApi.insertCustomXmlPartOnline(insertRequest)
.then((insertRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of insertRequest: ", insertRequestResult);
});