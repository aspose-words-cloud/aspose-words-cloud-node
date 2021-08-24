const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
let requestDocument = fs.createReadStream("Sample.docx");
let requestImageFile = fs.createReadStream("Common/aspose-cloud.png");
const insertRequest = new model.InsertWatermarkImageOnlineRequest({
    document: requestDocument,
    imageFile: requestImageFile
});

wordsApi.insertWatermarkImageOnline(insertRequest)
.then((insertRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of insertRequest: ", insertRequestResult);
});