const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const documentsDir = "./";
const compareRequest = new model.CompareDocumentOnlineRequest({
    document: fs.createReadStream(documentsDir + "compareTestDoc1.doc"),
    compareData: new model.CompareData({
        author: "author",
        comparingWithDocument: "TestCompareDocument2.doc",
        dateTime: new Date('2015-10-26T00:00:00Z')
    }),
    comparingDocument: fs.createReadStream(documentsDir + "compareTestDoc2.doc"),
    destFileName: "/TestCompareDocumentOut.doc"
});

return wordsApi.compareDocumentOnline(compareRequest)
.then((compareRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of compareRequest: ", compareRequestResult);
});