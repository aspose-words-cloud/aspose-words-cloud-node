const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
let requestDocument = fs.createReadStream("Sample.docx");
let requestCustomXmlPart = new model.CustomXmlPartUpdate({
    data: "<data>Hello world</data>"
})
const updateRequest = new model.UpdateCustomXmlPartOnlineRequest({
    document: requestDocument,
    customXmlPartIndex: 0,
    customXmlPart: requestCustomXmlPart
});

wordsApi.updateCustomXmlPartOnline(updateRequest)
.then((updateRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of updateRequest: ", updateRequestResult);
});