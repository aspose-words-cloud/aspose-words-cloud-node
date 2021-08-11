const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const documentsDir = "./";
const insertRequest = new model.InsertWatermarkImageOnlineRequest({
    document: fs.createReadStream(documentsDir + "Sample.docx"),
    imageFile: fs.createReadStream(documentsDir + "Common/aspose-cloud.png")
});

return wordsApi.insertWatermarkImageOnline(insertRequest)
.then((insertRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of insertRequest: ", insertRequestResult);
});