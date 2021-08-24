const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
let requestDocument = fs.createReadStream("Sample.docx");
let requestFormField = new model.FormFieldTextInput({
    name: "FullName",
    enabled: true,
    calculateOnExit: true,
    statusText: "",
    textInputType: model.FormFieldTextInput.TextInputTypeEnum.Regular,
    textInputDefault: "No name"
})
const updateRequest = new model.UpdateFormFieldOnlineRequest({
    document: requestDocument,
    index: 0,
    formField: requestFormField,
    nodePath: "sections/0"
});

wordsApi.updateFormFieldOnline(updateRequest)
.then((updateRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of updateRequest: ", updateRequestResult);
});