const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const remoteFileName = "Sample.docx";

let requestDocumentListDocumentEntries0 = new model.DocumentEntry({
    href: remoteFileName,
    importFormatMode: "KeepSourceFormatting"
})
let requestDocumentListDocumentEntries = [
    requestDocumentListDocumentEntries0
]
let requestDocumentList = new model.DocumentEntryList({
    documentEntries: requestDocumentListDocumentEntries
})
const appendRequest = new model.AppendDocumentRequest({
    name: remoteFileName,
    documentList: requestDocumentList
});

wordsApi.appendDocument(appendRequest)
.then((appendRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of appendRequest: ", appendRequestResult);
});