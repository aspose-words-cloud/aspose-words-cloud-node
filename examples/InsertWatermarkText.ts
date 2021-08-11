const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const remoteFileName = "Sample.docx";

const insertRequest = new model.InsertWatermarkTextRequest({
    name: remoteFileName,
    watermarkText: new model.WatermarkText({
        text: "This is the text",
        rotationAngle: 90.0
    }),
    destFileName: remoteFileName
});

return wordsApi.insertWatermarkText(insertRequest)
.then((insertRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of insertRequest: ", insertRequestResult);
});