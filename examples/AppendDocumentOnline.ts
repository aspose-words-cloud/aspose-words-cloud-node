const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const documentsDir = "./";
const appendRequest = new model.AppendDocumentOnlineRequest({
    document: fs.createReadStream(documentsDir + "Sample.docx"),
    documentList: new model.DocumentEntryList({
        documentEntries: [
            new model.DocumentEntry({
                href: "Sample.docx",
                importFormatMode: "KeepSourceFormatting"
            })
        ]
    })
});

return wordsApi.appendDocumentOnline(appendRequest)
.then((appendRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of appendRequest: ", appendRequestResult);
});