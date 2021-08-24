const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
let requestWatermarkText = new model.WatermarkText({
    text: "This is the text",
    rotationAngle: 90.0
})
const insertRequest = new model.InsertWatermarkTextRequest({
    name: "Sample.docx",
    watermarkText: requestWatermarkText
});

wordsApi.insertWatermarkText(insertRequest)
.then((insertRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of insertRequest: ", insertRequestResult);
});