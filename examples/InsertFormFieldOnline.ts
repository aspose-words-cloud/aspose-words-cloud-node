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
    textInputDefault: "123",
    textInputFormat: "UPPERCASE"
})
const insertRequest = new model.InsertFormFieldOnlineRequest({
    document: requestDocument,
    formField: requestFormField,
    nodePath: "sections/0/paragraphs/0"
});

wordsApi.insertFormFieldOnline(insertRequest)
.then((insertRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of insertRequest: ", insertRequestResult);
});