const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const documentsDir = "./";
const updateRequest = new model.UpdateCustomXmlPartOnlineRequest({
    document: fs.createReadStream(documentsDir + "Sample.docx"),
    customXmlPartIndex: 0,
    customXmlPart: new model.CustomXmlPartUpdate({
        data: "<data>Hello world</data>"
    })
});

return wordsApi.updateCustomXmlPartOnline(updateRequest)
.then((updateRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of updateRequest: ", updateRequestResult);
});