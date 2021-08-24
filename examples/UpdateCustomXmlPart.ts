const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
let requestCustomXmlPart = new model.CustomXmlPartUpdate({
    data: "<data>Hello world</data>"
})
const updateRequest = new model.UpdateCustomXmlPartRequest({
    name: "Sample.docx",
    customXmlPartIndex: 0,
    customXmlPart: requestCustomXmlPart
});

wordsApi.updateCustomXmlPart(updateRequest)
.then((updateRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of updateRequest: ", updateRequestResult);
});