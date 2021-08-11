const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const documentsDir = "./";
const insertRequest = new model.InsertWatermarkTextOnlineRequest({
    document: fs.createReadStream(documentsDir + "Sample.docx"),
    watermarkText: new model.WatermarkText({
        text: "This is the text",
        rotationAngle: 90
    })
});

return wordsApi.insertWatermarkTextOnline(insertRequest)
.then((insertRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of insertRequest: ", insertRequestResult);
});