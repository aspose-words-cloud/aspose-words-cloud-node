const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
let requestDocument = fs.createReadStream("Sample.docx");
let requestWatermarkText = new model.WatermarkText({
    text: "This is the text",
    rotationAngle: 90
})
const insertRequest = new model.InsertWatermarkTextOnlineRequest({
    document: requestDocument,
    watermarkText: requestWatermarkText
});

wordsApi.insertWatermarkTextOnline(insertRequest)
.then((insertRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of insertRequest: ", insertRequestResult);
});