const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const updateRequest = new model.UpdateFormFieldRequest({
    name: "Sample.docx",
    index: 0,
    formField: new model.FormFieldTextInput({
        name: "FullName",
        enabled: true,
        calculateOnExit: true,
        statusText: "",
        textInputType: model.FormFieldTextInput.TextInputTypeEnum.Regular,
        textInputDefault: "No name"
    })
});

return wordsApi.updateFormField(updateRequest)
.then((updateRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of updateRequest: ", updateRequestResult);
});