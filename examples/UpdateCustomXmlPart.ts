const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const updateRequest = new model.UpdateCustomXmlPartRequest({
    name: "Sample.docx",
    customXmlPartIndex: 0,
    customXmlPart: new model.CustomXmlPartUpdate({
        data: "<data>Hello world</data>"
    })
});

return wordsApi.updateCustomXmlPart(updateRequest)
.then((updateRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of updateRequest: ", updateRequestResult);
});