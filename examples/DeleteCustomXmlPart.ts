const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const remoteFileName = "Sample.docx";

const deleteRequest = new model.DeleteCustomXmlPartRequest({
    name: remoteFileName,
    customXmlPartIndex: 0,
    destFileName: remoteFileName
});

return wordsApi.deleteCustomXmlPart(deleteRequest)
.then((deleteRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of deleteRequest: ", deleteRequestResult);
});