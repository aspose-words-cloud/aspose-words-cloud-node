const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const documentsDir = "./";
const updateRequest = new model.UpdateDrawingObjectOnlineRequest({
    document: fs.createReadStream(documentsDir + "Sample.docx"),
    drawingObject: new model.DrawingObjectUpdate({
        left: 0
    }),
    imageFile: fs.createReadStream(documentsDir + "Common/aspose-cloud.png"),
    index: 0
});

return wordsApi.updateDrawingObjectOnline(updateRequest)
.then((updateRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of updateRequest: ", updateRequestResult);
});