const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
let requestDrawingObject = new model.DrawingObjectUpdate({
    left: 0
})
let requestImageFile = fs.createReadStream("Common/aspose-cloud.png");
const updateRequest = new model.UpdateDrawingObjectRequest({
    name: "Sample.docx",
    drawingObject: requestDrawingObject,
    imageFile: requestImageFile,
    index: 0
});

wordsApi.updateDrawingObject(updateRequest)
.then((updateRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of updateRequest: ", updateRequestResult);
});