const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
let requestDocument = fs.createReadStream("Sample.docx");
let requestCustomXmlPart = new model.CustomXmlPartInsert({
    id: "hello",
    data: "<data>Hello world</data>"
})
const insertRequest = new model.InsertCustomXmlPartOnlineRequest({
    document: requestDocument,
    customXmlPart: requestCustomXmlPart
});

wordsApi.insertCustomXmlPartOnline(insertRequest)
.then((insertRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of insertRequest: ", insertRequestResult);
});