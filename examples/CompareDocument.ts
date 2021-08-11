const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const compareRequest = new model.CompareDocumentRequest({
    name: "TestCompareDocument1.doc",
    compareData: new model.CompareData({
        author: "author",
        comparingWithDocument: "TestCompareDocument2.doc",
        dateTime: new Date('2015-10-26T00:00:00Z')
    }),
    destFileName: "/TestCompareDocumentOut.doc"
});

return wordsApi.compareDocument(compareRequest)
.then((compareRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of compareRequest: ", compareRequestResult);
});