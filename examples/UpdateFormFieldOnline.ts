const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const documentsDir = "./";
const updateRequest = new model.UpdateFormFieldOnlineRequest({
    document: fs.createReadStream(documentsDir + "/FormFilled.docx"),
    index: 0,
    formField: new model.FormFieldTextInput({
        name: "FullName",
        enabled: true,
        calculateOnExit: true,
        statusText: "",
        textInputType: model.FormFieldTextInput.TextInputTypeEnum.Regular,
        textInputDefault: "No name"
    }),
    nodePath: "sections/0"
});

return wordsApi.updateFormFieldOnline(updateRequest)
.then((updateRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of updateRequest: ", updateRequestResult);
});