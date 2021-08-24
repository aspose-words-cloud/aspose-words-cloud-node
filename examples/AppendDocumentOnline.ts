const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
let requestDocument = fs.createReadStream("Sample.docx");
let requestDocumentListDocumentEntries0 = new model.DocumentEntry({
    href: "Sample.docx",
    importFormatMode: "KeepSourceFormatting"
})
let requestDocumentListDocumentEntries = [
    requestDocumentListDocumentEntries0
]
let requestDocumentList = new model.DocumentEntryList({
    documentEntries: requestDocumentListDocumentEntries
})
const appendRequest = new model.AppendDocumentOnlineRequest({
    document: requestDocument,
    documentList: requestDocumentList
});

wordsApi.appendDocumentOnline(appendRequest)
.then((appendRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of appendRequest: ", appendRequestResult);
});