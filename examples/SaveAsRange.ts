const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
let requestDocumentParameters = new model.RangeDocument({
    documentName: "/NewDoc.docx"
})
const saveRequest = new model.SaveAsRangeRequest({
    name: "Sample.docx",
    rangeStartIdentifier: "id0.0.0",
    documentParameters: requestDocumentParameters,
    rangeEndIdentifier: "id0.0.1"
});

wordsApi.saveAsRange(saveRequest)
.then((saveRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of saveRequest: ", saveRequestResult);
});