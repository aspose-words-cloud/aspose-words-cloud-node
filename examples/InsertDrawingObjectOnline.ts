const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
let requestDocument = fs.createReadStream("Sample.docx");
let requestDrawingObject = new model.DrawingObjectInsert({
    height: 0,
    left: 0,
    top: 0,
    width: 0,
    relativeHorizontalPosition: model.DrawingObjectInsert.RelativeHorizontalPositionEnum.Margin,
    relativeVerticalPosition: model.DrawingObjectInsert.RelativeVerticalPositionEnum.Margin,
    wrapType: model.DrawingObjectInsert.WrapTypeEnum.Inline
})
let requestImageFile = fs.createReadStream("Common/aspose-cloud.png");
const insertRequest = new model.InsertDrawingObjectOnlineRequest({
    document: requestDocument,
    drawingObject: requestDrawingObject,
    imageFile: requestImageFile
});

wordsApi.insertDrawingObjectOnline(insertRequest)
.then((insertRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of insertRequest: ", insertRequestResult);
});