const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const documentsDir = "./";
const insertRequest = new model.InsertDrawingObjectOnlineRequest({
    document: fs.createReadStream(documentsDir + "Sample.docx"),
    drawingObject: new model.DrawingObjectInsert({
        height: 0,
        left: 0,
        top: 0,
        width: 0,
        relativeHorizontalPosition: model.DrawingObjectInsert.RelativeHorizontalPositionEnum.Margin,
        relativeVerticalPosition: model.DrawingObjectInsert.RelativeVerticalPositionEnum.Margin,
        wrapType: model.DrawingObjectInsert.WrapTypeEnum.Inline
    }),
    imageFile: fs.createReadStream(documentsDir + "Common/aspose-cloud.png"),
    nodePath: ""
});

return wordsApi.insertDrawingObjectOnline(insertRequest)
.then((insertRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of insertRequest: ", insertRequestResult);
});