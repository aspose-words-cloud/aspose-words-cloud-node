const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const documentsDir = "./";
const saveRequest = new model.SaveAsRangeOnlineRequest({
    document: fs.createReadStream(documentsDir + "Sample.doc"),
    rangeStartIdentifier: "id0.0.0",
    documentParameters: new model.RangeDocument({
        documentName: "/NewDoc.docx"
    }),
    rangeEndIdentifier: "id0.0.1"
});

return wordsApi.saveAsRangeOnline(saveRequest)
.then((saveRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of saveRequest: ", saveRequestResult);
});