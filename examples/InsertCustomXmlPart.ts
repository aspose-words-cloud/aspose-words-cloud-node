const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const insertRequest = new model.InsertCustomXmlPartRequest({
    name: "Sample.docx",
    customXmlPart: new model.CustomXmlPartInsert({
        id: "hello",
        data: "<data>Hello world</data>"
    })
});

return wordsApi.insertCustomXmlPart(insertRequest)
.then((insertRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of insertRequest: ", insertRequestResult);
});