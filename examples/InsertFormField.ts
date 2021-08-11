const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const remoteFileName = "Sample.docx";

const insertRequest = new model.InsertFormFieldRequest({
    name: remoteFileName,
    formField: new model.FormFieldTextInput({
        name: "FullName",
        enabled: true,
        calculateOnExit: true,
        statusText: "",
        textInputType: model.FormFieldTextInput.TextInputTypeEnum.Regular,
        textInputDefault: "123",
        textInputFormat: "UPPERCASE"
    }),
    destFileName: remoteFileName
});

return wordsApi.insertFormField(insertRequest)
.then((insertRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of insertRequest: ", insertRequestResult);
});