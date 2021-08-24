const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
let requestDocument = fs.createReadStream("Sample.docx");
let requestDrawingObject = new model.DrawingObjectUpdate({
    left: 0
})
let requestImageFile = fs.createReadStream("Common/aspose-cloud.png");
const updateRequest = new model.UpdateDrawingObjectOnlineRequest({
    document: requestDocument,
    drawingObject: requestDrawingObject,
    imageFile: requestImageFile,
    index: 0
});

wordsApi.updateDrawingObjectOnline(updateRequest)
.then((updateRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of updateRequest: ", updateRequestResult);
});