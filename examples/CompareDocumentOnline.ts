const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
let requestDocument = fs.createReadStream("compareTestDoc1.doc");
let requestCompareData = new model.CompareData({
    author: "author",
    comparingWithDocument: "TestCompareDocument2.doc",
    dateTime: new Date('2015-10-26T00:00:00Z')
})
let requestComparingDocument = fs.createReadStream("compareTestDoc2.doc");
const compareRequest = new model.CompareDocumentOnlineRequest({
    document: requestDocument,
    compareData: requestCompareData,
    comparingDocument: requestComparingDocument,
    destFileName: "/TestCompareDocumentOut.doc"
});

wordsApi.compareDocumentOnline(compareRequest)
.then((compareRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of compareRequest: ", compareRequestResult);
});