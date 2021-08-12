const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const insertRequest = new model.InsertWatermarkTextRequest({
    name: "Sample.docx",
    watermarkText: new model.WatermarkText({
        text: "This is the text",
        rotationAngle: 90.0
    })
});

return wordsApi.insertWatermarkText(insertRequest)
.then((insertRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of insertRequest: ", insertRequestResult);
});