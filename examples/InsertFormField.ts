const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
let requestFormField = new model.FormFieldTextInput({
    name: "FullName",
    enabled: true,
    calculateOnExit: true,
    statusText: "",
    textInputType: model.FormFieldTextInput.TextInputTypeEnum.Regular,
    textInputDefault: "123",
    textInputFormat: "UPPERCASE"
})
const insertRequest = new model.InsertFormFieldRequest({
    name: "Sample.docx",
    formField: requestFormField
});

wordsApi.insertFormField(insertRequest)
.then((insertRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of insertRequest: ", insertRequestResult);
});