const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const remoteFileName = "Sample.docx";

const appendRequest = new model.AppendDocumentRequest({
    name: remoteFileName,
    documentList: new model.DocumentEntryList({
        documentEntries: [
            new model.DocumentEntry({
                href: remoteFileName,
                importFormatMode: "KeepSourceFormatting"
            })
        ]
    })
});

return wordsApi.appendDocument(appendRequest)
.then((appendRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of appendRequest: ", appendRequestResult);
});