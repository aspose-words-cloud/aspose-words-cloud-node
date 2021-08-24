const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
let requestCompareData = new model.CompareData({
    author: "author",
    comparingWithDocument: "TestCompareDocument2.doc",
    dateTime: new Date('2015-10-26T00:00:00Z')
})
const compareRequest = new model.CompareDocumentRequest({
    name: "TestCompareDocument1.doc",
    compareData: requestCompareData,
    destFileName: "/TestCompareDocumentOut.doc"
});

wordsApi.compareDocument(compareRequest)
.then((compareRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of compareRequest: ", compareRequestResult);
});